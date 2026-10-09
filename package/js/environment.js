(function (env) {
    // valid value 'DEV', 'UAT', 'PROD'
    var currEnvi = 'PROD';
    // ebir forms current version
    var currVer = '7.9.6.0';

    var userTypeWS = {
        DEV: {
            //primary: 'http://ws2.birgovph.com/',
            //backup: 'http://ws1.birgovph.com/'
            primary: 'http://birgovph.com/',
            backup: 'http://ws1.birgovph.com/'
        },
        UAT: {
            //primary: 'http://ws2.birgovph.com/',
            //backup: 'http://ws1.birgovph.com/'
            primary: 'http://birgovph.com/',
            backup: 'http://ws1.birgovph.com/'
        },
        PROD: {
            //primary: 'http://birgovph.com/',
            //backup: 'http://ws2.birgovph.com/'
            primary: 'http://birgovph.com/',
            backup: 'http://ws1.birgovph.com/'
        }
    };

    var vCheckWS = {
        DEV: {
            //primary: 'http://ws2.birgovph.com/ebirformsVersionTest.php?data=',
            //backup: 'http://ws1.birgovph.com/ebirformsVersionTest.php?data='
            primary: 'http://birgovph.com/ebirformsVersion.php?data=',
            backup: 'http://ws2.birgovph.com/ebirformsVersion.php?data='
        },
        UAT: {
            //primary: 'http://ws2.birgovph.com/ebirformsVersionTest.php?data=',
            //backup: 'http://ws1.birgovph.com/ebirformsVersionTest.php?data='
            primary: 'http://birgovph.com/ebirformsVersion.php?data=',
            backup: 'http://ws2.birgovph.com/ebirformsVersion.php?data='
        },
        PROD: {
            primary: 'http://birgovph.com/ebirformsVersion.php?data=',
            backup: 'http://ws2.birgovph.com/ebirformsVersion.php?data='
        }
    };


    var ftpTargetFolder = {
        DEV: {
            '0605': 'UAT1/0605',
            '0619E': 'UAT1/0619E',
            '0619F': 'UAT1/0619F',
            '0620': 'UAT1/0620',
            '1600': 'UAT1/1600',
            '1600WP': 'UAT1/1600WP',
            '1601C': 'UAT1/1601C',
            '1601Cv2018': 'UAT1/1601Cv2018',
            '1601E': 'UAT1/1601E',
            '1601EQ': 'UAT1/1601EQ',
            '1601F': 'UAT1/1601F',
            '1601FQ': 'UAT1/1601FQ',
            '1602': 'UAT1/1602',
            '1602Qv2018': 'UAT1/1602Qv2018',
            '1603': 'UAT1/1603',
            '1603Qv2018': 'UAT1/1603Qv2018',
            '1604CF': 'UAT1/1604CF',
            '1604E': 'UAT1/1604E',
            '1604Ev2018': 'UAT1/1604Ev2018',
            '1606': 'UAT1/1606',
            '1621': 'UAT1/1621',
            '1700': 'UAT1/1700',
            '1700v2018': 'UAT1/1700v2018',
            '1701': 'UAT1/1701',
            '1701A': 'UAT1/1701A',
            '1701v2018': 'UAT1/1701v2018',
            '1701Q': 'UAT1/1701Q',
            '1701Qv2018': 'UAT1/1701Qv2018',
            '1702EX': 'UAT1/1702EX',
            '1702EXv2018': 'UAT1/1702EXv2018',
            '1702EXv2018C': 'UAT1/1702EXv2018C',
            '1600VTv2018': 'UAT1/1600VTv2018',
            '1600PTv2018': 'UAT1/1600PTv2018',
            '2552v2018': 'UAT1/2552v2018',
            '2200Cv2018': 'UAT1/2200Cv2018',
            '1702MX': 'UAT1/1702MX',
            '1702MXv2018': 'UAT1/1702MXv2018',
            '1702MXv2018C': 'UAT1/1702MXv2018C',
            '1702Q': 'UAT1/1702Q',
            '1702Qv2008C': 'UAT1/1702Qv2008C',
            '1702Qv2018C': 'UAT1/1702Qv2018C',
            '1702RT': 'UAT1/1702RT',
            '1702RTv2018': 'UAT1/1702RTv2018',
            '1702RTv2018C': 'UAT1/1702RTv2018C',
            '1704': 'UAT1/1704',
            '1706': 'UAT1/1706',
            '1707': 'UAT1/1707',
            '1707v2018': 'UAT1/1707v2018',
            '1707v2021': 'UAT1/1707v2021',
            '1707A': 'UAT1/1707A',
            '1707Av2021': 'UAT1/1707Av2021',
            '1800': 'UAT1/1800',
            '1801': 'UAT1/1801',
            '1801v2018': 'UAT1/1801v2018',
            '2000': 'UAT1/2000',
            '2000v2018': 'UAT1/2000v2018',
            '2000OT': 'UAT1/2000OT',
            '2000OTv2018': 'UAT1/2000OTv2018',
            '2200A': 'UAT1/2200A',
            '2200Av2020': 'UAT1/2200Av2020',
            '2200AN': 'UAT1/2200AN',
            '2200M': 'UAT1/2200M',
            '2200Mv2018': 'UAT1/2200Mv2018',
            '2200P': 'UAT1/2200P',
            '2200Pv2020': 'UAT1/2200Pv2020',
            '2200S': 'UAT1/2200S',
            '2200T': 'UAT1/2200T',
            '2200Tv2020': 'UAT1/2200Tv2020',
            '2550M': 'UAT1/2550M',
            '2550Q': 'UAT1/2550Q',
            '2550Qv2024': 'UAT1/2550Qv2024',
            '2551Q': 'UAT1/2551Q',
            '2551Qv2018': 'UAT1/2551Qv2018',
            '2551M': 'UAT1/2551M',
            '2552': 'UAT1/2552',
            '2553': 'UAT1/2553',
            '1701MS': 'UAT1/1701MS'
        },
        UAT: {
            '0605': 'UAT1/0605',
            '0619E': 'UAT1/0619E',
            '0619F': 'UAT1/0619F',
            '0620': 'UAT1/0620',
            '1600': 'UAT1/1600',
            '1600WP': 'UAT1/1600WP',
            '1601C': 'UAT1/1601C',
            '1601Cv2018': 'UAT1/1601Cv2018',
            '1601E': 'UAT1/1601E',
            '1601EQ': 'UAT1/1601EQ',
            '1601F': 'UAT1/1601F',
            '1601FQ': 'UAT1/1601FQ',
            '1602': 'UAT1/1602',
            '1602Qv2018': 'UAT1/1602Qv2018',
            '1603': 'UAT1/1603',
            '1603Qv2018': 'UAT1/1603Qv2018',
            '1604CF': 'UAT1/1604CF',
            '1604E': 'UAT1/1604E',
            '1604Ev2018': 'UAT1/1604Ev2018',
            '1606': 'UAT1/1606',
            '1621': 'UAT1/1621',
            '1700': 'UAT1/1700',
            '1700v2018': 'UAT1/1700v2018',
            '1701': 'UAT1/1701',
            '1701A': 'UAT1/1701A',
            '1701v2018': 'UAT1/1701v2018',
            '1701Q': 'UAT1/1701Q',
            '1701Qv2018': 'UAT1/1701Qv2018',
            '1702EX': 'UAT1/1702EX',
            '1702EXv2018': 'UAT1/1702EXv2018',
            '1702EXv2018C': 'UAT1/1702EXv2018C',
            '1600VTv2018': 'UAT1/1600VTv2018',
            '1600PTv2018': 'UAT1/1600PTv2018',
            '2552v2018': 'UAT1/2552v2018',
            '2200Cv2018': 'UAT1/2200Cv2018',
            '1702MX': 'UAT1/1702MX',
            '1702MXv2018': 'UAT1/1702MXv2018',
            '1702MXv2018C': 'UAT1/1702MXv2018C',
            '1702Q': 'UAT1/1702Q',
            '1702Qv2008C': 'UAT1/1702Qv2008C',
            '1702Qv2018C': 'UAT1/1702Qv2018C',
            '1702RT': 'UAT1/1702RT',
            '1702RTv2018': 'UAT1/1702RTv2018',
            '1702RTv2018C': 'UAT1/1702RTv2018C',
            '1704': 'UAT1/1704',
            '1706': 'UAT1/1706',
            '1707': 'UAT1/1707',
            '1707v2018': 'UAT1/1707v2018',
            '1707v2021': 'UAT1/1707v2021',
            '1707A': 'UAT1/1707A',
            '1707Av2021': 'UAT1/1707Av2021',
            '1800': 'UAT1/1800',
            '1801': 'UAT1/1801',
            '1801v2018': 'UAT1/1801v2018',
            '2000': 'UAT1/2000',
            '2000v2018': 'UAT1/2000v2018',
            '2000OT': 'UAT1/2000OT',
            '2000OTv2018': 'UAT1/2000OTv2018',
            '2200A': 'UAT1/2200A',
            '2200Av2020': 'UAT1/2200Av2020',
            '2200AN': 'UAT1/2200AN',
            '2200M': 'UAT1/2200M',
            '2200Mv2018': 'UAT1/2200Mv2018',
            '2200P': 'UAT1/2200P',
            '2200Pv2020': 'UAT1/2200Pv2020',
            '2200S': 'UAT1/2200S',
            '2200T': 'UAT1/2200T',
            '2200Tv2020': 'UAT1/2200Tv2020',
            '2550M': 'UAT1/2550M',
            '2550Q': 'UAT1/2550Q',
            '2550Qv2024': 'UAT1/2550Qv2024',
            '2551Q': 'UAT1/2551Q',
            '2551Qv2018': 'UAT1/2551Qv2018',
            '2551M': 'UAT1/2551M',
            '2552': 'UAT1/2552',
            '2553': 'UAT1/2553',
            '1701MS': 'UAT1/1701MS'
        },
        PROD: {
            '0605': '0605',
            '0619E': '0619E',
            '0619F': '0619F',
            '0620': '0620',
            '1600': '1600',
            '1600WP': '1600WP',
            '1601C': '1601C',
            '1601Cv2018': '1601Cv2018',
            '1601E': '1601E',
            '1601EQ': '1601EQ',
            '1601F': '1601F',
            '1601FQ': '1601FQ',
            '1602': '1602',
            '1602Qv2018': '1602Qv2018',
            '1603': '1603',
            '1603Qv2018': '1603Qv2018',
            '1604C': '1604C',
            '1604CF': '1604CF',
            '1604F': '1604F',
            '1604E': '1604E',
            '1604Ev2018': '1604Ev2018',
            '1606': '1606',
            '1621': '1621',
            '1700': '1700v2013',
            '1700v2018': '1700v2018',
            '1701': '1701v2013',
            '1701A': '1701A',
            '1701v2018': '1701v2018',
            '1701Q': '1701Qv2008',
            '1701Qv2018': '1701Qv2018',
            '1702EX': '1702EXv2013',
            '1702EXv2018': '1702EXv2018',
            '1702EXv2018C': '1702EXv2018C',
            '1600VTv2018': '1600VTv2018',
            '2552v2018': '2552v2018',
            '1600PTv2018': '1600PTv2018',
            '1707v2018': '1707v2018',
            '1707v2021': '1707v2021',            
            '1702MX': '1702MXv2013',
            '1702MXv2018': '1702MXv2018',
            '1702MXv2018C': '1702MXv2018C',
            '1702Q': '1702Qv2008',
            '1702Qv2008C': '1702Qv2008C',
            '1702RT': '1702RTv2013',
            '1702RTv2018': '1702RTv2018',
            '1702RTv2018C': '1702RTv2018C',
            '1704': '1704',
            '1706': '1706',
            '1707': '1707',
            '1707A': '1707Av2015',
            '1707Av2021': '1707Av2021',
            '1800': '1800',
            '1800v2018': '1800v2018',
            '1801': '1801',
            '1801v2018': '1801v2018',
            '2000': '2000',
            '2000v2018': '2000v2018',
            '2000OT': '2000OT',
            '2000OTv2018': '2000OTv2018',
            '2200A': '2200Av2013',
            '2200AN': '2200AN',
            '2200Cv2018': '2200Cv2018',
            '2200M': '2200M',
            '2200P': '2200P',
            '2200S': '2200S',
            '2200T': '2200Tv2013',
            '2200Tv2020': '2200Tv2020',
            '2550DS' : '2550DS',
            '2550M': '2550M',
            '2550Q': '2550Q',
            '2550Qv2024': '2550Qv2024',
            '1702Qv2018C': '1702Qv2018C',
            '2551Q': '2551Q',
            '2551Qv2018': '2551Qv2018',
            '2551M': '2551M',
            '2552': '2552',
            '2553': '2553',
            '1701MS': '1701MS'

        }
    };

    var wsUrl = {
        DEV: 'https://efps-rearch.bir.gov.ph/efps-war/services/formsws?wsdl',
        UAT: 'https://efps-rearch.bir.gov.ph/efps-war/services/formsws?wsdl',
        PROD: 'https://efps.bir.gov.ph/efps-war/services/formsws?wsdl'
    };

    var wsSite = {
        PROD: 'https://efps.bir.gov.ph/',
        UAT: 'https://efps-rearch.bir.gov.ph/efps-war/',
        DEV: 'https://efps-rearch.bir.gov.ph/efps-war/'
    };

    env.getCurrEnvi = function () {
        return currEnvi;
    };

    env.getCurrVer = function () {
        return currVer;
    }

    env.getConService = function (mode) {
        return userTypeWS[currEnvi][mode];
    }

    env.getVersionCheckWS = function (mode) {
        return vCheckWS[currEnvi][mode];
    }

    env.getFtpFolder = function (form) {
        return ftpTargetFolder[currEnvi][form];
    }

    env.getWsUrl = function () {
        return wsUrl[currEnvi];
    }

    env.getWsSite = function () {
        return wsSite[currEnvi];
    }

})(window.enviService || (window.enviService = {}));
