CREATE TABLE IF NOT EXISTS `announcements` (
	`id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`Title` text,
	`Body` text NOT NULL,
	`PublishTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)CHARSET=utf8 AUTO_INCREMENT=1;