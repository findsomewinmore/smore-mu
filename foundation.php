<?php
/** Zurb Foundation Visual Editor for TinyMCE - v1.0.0
* http://findsomewinmore.com/
* Copyright (c) 2015; * Licensed GPLv2+ */

DEFINE("FIWI_FNDN_URL", WPMU_PLUGIN_URL . "/foundation");
DEFINE("FIWI_FNDN_DIR", WPMU_PLUGIN_DIR . "/foundation");

 //Start includes
$fiwi_foundation_includes = array(
  '/lib/foundation.php'
);
foreach ($fiwi_foundation_includes as $file) {
  require_once FIWI_FNDN_DIR . $file;
}
unset($file, $filepath);
