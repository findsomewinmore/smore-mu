<?php

	// Remove Wordpress Version
  function fiwi_remove_wordpress_version() {
    return '';
  }
  add_filter('the_generator', 'fiwi_remove_wordpress_version');


  //Remove Yoast Comments
	function ad_ob_start() {
	    ob_start('ad_filter_wp_head_output');
	}
	function ad_ob_end_flush() {
	    ob_end_flush();
	}
	function ad_filter_wp_head_output($output) {
	    if (defined('WPSEO_VERSION')) {	    	
	        $output = str_ireplace('<!-- This site is optimized with the Yoast SEO plugin v' . WPSEO_VERSION . ' - https://yoast.com/wordpress/plugins/seo/ -->', '', $output);	        
	        $output = str_ireplace('<!-- / Yoast SEO plugin. -->', '', $output);
	    }
	    return $output;
	}

	add_action('get_header', 'ad_ob_start');
	add_action('wp_head', 'ad_ob_end_flush', 100);

	//Remove W3TotalCache Comments
	add_filter( 'w3tc_can_print_comment', '__return_false', 10, 1 );
