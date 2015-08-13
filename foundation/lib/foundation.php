<?php
/** Zurb Foundation Visual Editor for TinyMCE - v1.0.0
* http://findsomewinmore.com/
* Copyright (c) 2015; * Licensed GPLv2+ */

/**
 * Add buttons to the TinyMCE-editor
 *
 * @return void
 */

function fiwi_foundation_buttonhooks() {
   	if ( ( current_user_can('edit_posts') || current_user_can('edit_pages') ) && get_user_option('rich_editing') ) {
    	add_filter("mce_external_plugins", "fiwi_foundation_register_tinymce_javascript");
    	add_filter('mce_buttons', 'fiwi_foundation_register_buttons');
    }
}

/**
 * Registers the buttons
 *
 * @param array $buttons All buttons
 * @return array All buttons
 */

function fiwi_foundation_register_buttons($buttons) {
   	array_push($buttons, "separator", "fiwi_foundation");
   	return $buttons;
}

/**
 * Adds the JavaScript used for the grid system in the editor
 *
 * @param array $plugin_array An array of tinyMCE plugins
 * @return array TinyMCE plugins
 */

function fiwi_foundation_register_tinymce_javascript($plugin_array) {
  $debug = defined('WP_DEBUG') ? WP_DEBUG : false;
  $plugin_array['fiwi_foundation'] = FIWI_FNDN_URL . '/js/foundation.js';
  return $plugin_array;
}

add_action('init', 'fiwi_foundation_buttonhooks');

/**
 * Create an icon for the TinyMCE-menu
 *
 * @return void
 */

function fiwi_foundation_icon() {

	if( is_admin() ) {

		?>
		<style type="text/css">
  		.mce-i-foundation-icon {
  			background: url('<?php echo FIWI_FNDN_URL . '/img/zurb.png' ?>') no-repeat !important;
  		}
		</style>
		<?php

	}

}

add_action( 'admin_head', 'fiwi_foundation_icon', 999 );
