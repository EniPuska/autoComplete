# autoComplete

1.Need "npm install" to install all required node_modules.
2.The mysql script for the table is:
"DROP DATABASE IF EXISTS `autocomplete`;
CREATE DATABASE IF NOT EXISTS `autocomplete` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `autocomplete`;

-- Dumping structure for πίνακας autocomplete.countries
DROP TABLE IF EXISTS `countries`;
CREATE TABLE IF NOT EXISTS `countries` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL DEFAULT '0',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;"