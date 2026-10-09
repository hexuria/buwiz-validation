'Sending the file using SFTP Protocol
'carlodlc 2026-feb-04
Function RenameAndSendFile(rowfile, eMailAdr, folder, mode, hostName, SSLport, port, username, password)
	Const copyType = 16
    Set fso = CreateObject("Scripting.FileSystemObject")
	
	On Error Resume Next
	
	path = fso.GetParentFolderName(rowFile)+"\" +fso.GetBaseName(rowFile)
	
	If eMailAdr<>"" Then path = path+"#"+eMailAdr+"#"
	path= path+".xml"	
	path = fso.GetDrive(rowFile)+path


	Dim MySource
	sendName = path
	MySource = rowFile	

    Dim fullpath
	fullpath = fso.GetAbsolutePathName("ebfSFTP.exe")
    
	fso.MoveFile MySource, sendName

	Set fso = Nothing
    Set objShell =  CreateObject("WScript.Shell")

	dim cmdLine1
	cmdLine1 = """" & fullpath & """" & " " &  hostName & " " & port & " " & username & " " & password & " " & folder & " " & """" & sendName & """"


	isSent = objShell.Run (cmdLine1, 0, true)
	'objShell.Exec (cmdLine1)

	'isSent = objShell.StdOut.ReadAll

	'If Err.Number <> 0 Then
    'WScript.Echo "An error occurred!"
    'WScript.Echo "Error Number: " & Err.Number
    'WScript.Echo "Description: " & Err.Description

	'isSent = 222
    
    ' Clear the error so it doesn't persist
    'Err.Clear 
    'End If

	

	'isSent = 0 for success else failed

	RenameAndSendFile=isSent

	Set objShell = Nothing
	
End Function

Function RenameAndSendFile_original(rowfile, eMailAdr, folder, mode, hostName, SSLport, port, username, password)
	Const copyType = 16
    'Set oShell = CreateObject("Shell.Application")
    Set fso = CreateObject("Scripting.FileSystemObject")
	
	On Error Resume Next
	
	path = fso.GetParentFolderName(rowFile)+"\" +fso.GetBaseName(rowFile)
	
	If eMailAdr<>"" Then path = path+"#"+eMailAdr+"#"
	path= path+".xml"	
	path = fso.GetDrive(rowFile)+path

	Dim MySource
	sendName = path
	MySource = rowFile	

    Dim fullpath
	fullpath = fso.GetAbsolutePathName("cFTPSend.exe")
	
	fso.MoveFile MySource, sendName

	Set fso = Nothing
    Set objShell =  CreateObject("WScript.Shell")
	'cmdLine1 = """" + fullpath + """" + " " + folder + " " + """" + sendName + """" + " " + mode + " " + hostName + " " + port
	'cmdLine1 = cmdLine1 + " " + username + " " + password

	cmdLine1 =  """" + fullpath + """" + " " + folder + " " + """" + sendName + """" + " " + mode  +  " " + hostName + " " + SSLport + " " + port + " " + username + " " + password




	isSent = objShell.Run(cmdLine1, 0, true)
	RenameAndSendFile=isSent
	Set objShell = Nothing
	
End Function

Function EncryptFile(fName) 
    Dim fullpath
    Set fso = CreateObject("Scripting.FileSystemObject")

	fullpath = fso.GetAbsolutePathName("Encrypt.exe")
	' MsgBox(fullpath)
	Set objShell =  CreateObject("WScript.Shell")
	cmdLine1 = """" + fullpath + """" + " " + """" + fName + """"
	' MsgBox cmdLine1
	isDone = objShell.Run(cmdLine1, 0, true)
	
	EncryptFile=isDone
	
End Function

Function ValidateTinWChkDgt(tinNumber)
    Dim fullpath
    Set fso = CreateObject("Scripting.FileSystemObject")

	fullpath = fso.GetAbsolutePathName("chkt.exe")
	' MsgBox(fullpath)
	Set objShell =  CreateObject("WScript.Shell")
	cmdLine1 = """" + fullpath + """" + " " + """" + tinNumber + """"
	' MsgBox cmdLine1
	isValid = objShell.Run(cmdLine1, 0, true)
	
	ValidateTinWChkDgt = isValid
    
End Function

Function SendToFTPOLD(folder, fileSend)
	Set objShell =  CreateObject("WScript.Shell")
	cmdLine1 = "..\ftpcmd.exe " + folder + " " + fileSend
	SendToFTP = objShell.Run(cmdLine1, 1, true)
End Function

Function ZipAndSendFile(rowfile, zipName, folder)
	Const copyType = 16
    Set oShell = CreateObject("Shell.Application")
    Set objFSO = CreateObject("Scripting.FileSystemObject")
	
	On Error Resume Next
	
	path = objFSO.GetParentFolderName(rowFile)+"\" +objFSO.GetBaseName(rowFile)
	If zipName<>"" Then path = path+"#"+zipName+"#"
	path= path+".zip"	
	path = objFSO.GetDrive(rowFile)+path

	Dim fso, MyTarget, MySource, file
	Set fso = CreateObject("Scripting.FileSystemObject")

	MyTarget = path
	MySource = rowFile
	' MsgBox MyTarget+vbLf+MySource
	If fso.FileExists(MyTarget) Then fso.DeleteFile(MyTarget)
	'create a new clean zip archive
	Set file = fso.CreateTextFile(MyTarget, True)
	file.write("PK" & chr(5) & chr(6) & string(18,chr(0)))
	file.Close
	Set objFile = objFSO.getFile(MySource)
	strParent = objFile.ParentFolder
	Set objFolder = oShell.NameSpace(strParent)
	Set objItem = objFolder.ParseName(objFile.Name)
	Set objZip = oShell.NameSpace(MyTarget)
	objZip.CopyHere objItem, copyType
	zipName = MyTarget

    ' wscript.sleep 1000 
    Dim fullpath
	fullpath = fso.GetAbsolutePathName("cFTPSend.exe")
	' MsgBox(fullpath)
	Set fso = Nothing
	Set oShell = Nothing
    Set objFSO = Nothing
    Set objShell =  CreateObject("WScript.Shell")
	cmdLine1 = fullpath + " " + folder + " " + zipName
	' MsgBox cmdLine1
	isSent = objShell.Run(cmdLine1, 1, true)
	ZipAndSendFile=isSent
	Set objShell = Nothing
End Function

Function BIRSendFTPOLD(FileToSend, FTPUser, FTPPass, FTPDir, IsREgistered)

    Msgbox "BIRSend Initiated"
	
	Set oShell = CreateObject("Shell.Application")
	Set objFSO = CreateObject("Scripting.FileSystemObject")
	
	Dim path
	Dim FTPHost
	
	path = FileToSend
	'"c:\test\999999999999-1702RT-1214.xml"

	On Error Resume Next

	Const copyType = 16

	'FTP Wait Time in ms
	waitTime = 80000


	'FTPUser = "uploadFile"
	'FTPPass = "bir12BIR"
	FTPHost = "bir.brickftp.com/"
	'FTPDir = ""

	strFTP = "ftp://" & FTPUser & ":" & FTPPass & "@" & FTPHost & FTPDir
	Set objFTP = oShell.NameSpace(strFTP)

	'Upload single file       
	If objFSO.FileExists(path) Then
		Set objFile = objFSO.getFile(path)
		strParent = objFile.ParentFolder
		Set objFolder = oShell.NameSpace(strParent)

		Set objItem = objFolder.ParseName(objFile.Name)
		msg = "Uploading file " & objItem.Name & " to " & strFTP
		'MsgBox msg
		objFTP.CopyHere objItem, copyType
	End If


	If Err.Number <> 0 Then
		msg = "Error: " & Err.Description
		MsgBox msg
	End If

	'Wait for upload
	Wscript.Sleep waitTime
	'MsgBox "Your data was successfully sent"
    
    ' Clean up variables.
    Set FTPHost = Nothing
    Set path = Nothing
 
			
End Function

Function ZipFile(rowfile, zipName)
	Const copyType = 16
    Set oShell = CreateObject("Shell.Application")
    Set objFSO = CreateObject("Scripting.FileSystemObject")
	
	On Error Resume Next
	
	path = objFSO.GetParentFolderName(rowFile)+"\" +objFSO.GetBaseName(rowFile)
	If zipName<>"" Then path = path+"#"+zipName+"#"
	path= path+".zip"	
	path = objFSO.GetDrive(rowFile)+path

	Dim fso, MyTarget, MySource, file
	Set fso = CreateObject("Scripting.FileSystemObject")

	MyTarget = path
	MySource = rowFile
	If fso.FileExists(MyTarget) Then fso.DeleteFile(MyTarget)
	'create a new clean zip archive
	Set file = fso.CreateTextFile(MyTarget, True)
	file.write("PK" & chr(5) & chr(6) & string(18,chr(0)))
	file.Close
	Set objFile = objFSO.getFile(MySource)
	strParent = objFile.ParentFolder
	Set objFolder = oShell.NameSpace(strParent)
	Set objItem = objFolder.ParseName(objFile.Name)
	Set objZip = oShell.NameSpace(MyTarget)
	objZip.CopyHere objItem, copyType
	zipName = MyTarget
	ZipFile = zipName
    wscript.sleep 1000 
    
	Set fso = Nothing
	Set oShell = Nothing
    Set objFSO = Nothing
End Function


Function CopyFile(fName, emailAddress)
  	Dim newName
  	Set objFSO = CreateObject("Scripting.FileSystemObject")
  	On Error Resume Next
	newName = objFSO.GetParentFolderName(fName)+"\" +objFSO.GetBaseName(fName)+"#"+emailAddress+"#"+".xml"	
	newName = objFSO.GetDrive(fName)+path
	ok = objFSO.CopyFile(fName, newName)
    CopyFile = newName
End Function