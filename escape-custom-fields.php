<?php

function fiwi_filter_allowed_html($allowed, $context){
 
	if (is_array($context))
	{
	    return $allowed;
	}
 
	if ($context === 'post')
	{
      // Example case
	    $allowed['div']['data-equalizer'] = true;
	    $allowed['form']['data-equalizer'] = true;
	    $allowed['div']['data-equalizer-watch'] = true;
	    $allowed['img']['data-equalizer-watch'] = true;
	    $allowed['a']['data-modal'] = true;
	    $allowed['div']['data-options'] = true;
	    $allowed['a']['data-tab-link'] = true;
	    $allowed['a']['data-accordion-link'] = true;
	    $allowed['a']['href'] = true;
	    $allowed['a']['title'] = true;
	    $allowed['img']['data-svg-color'] = true;
	    $allowed['td']['data-title'] = true;
	    $allowed['th']['data-title'] = true;
	    $allowed['ul']['data-accordion'] = true;
	    $allowed['select']['data-select-download'] = true;
	    $allowed['select']['id'] = true;
	    $allowed['option'] = array();
	    $allowed['option']['value'] = true;
	}
 
	return $allowed;
}
add_filter('wp_kses_allowed_html', 'fiwi_filter_allowed_html', 10, 2);

function get_field_safe($field_key, $escape_method = 'esc_html', $post_id = false, $format_value = true) {
  $field = get_field($field_key, $post_id, $format_value);

  /* Check for null and falsy values and always return space */
  if($field === NULL || $field === FALSE) {
  	$field = '';
  }

  /* Handle arrays */
  if(is_array($field)) {
      $field_escaped = array();
      foreach($field as $key => $value) {
          $field_escaped[$key] = ($escape_method === NULL) ? $value : $escape_method($value);
      }
      return $field_escaped;
  }
  else {
  	return ($escape_method === NULL) ? $field : $escape_method($field);
  }
}


function the_field_safe($field_key, $escape_method = 'esc_html', $post_id = false, $format_value = true) {
    //Get field
    $value = get_field_safe($field_key, $escape_method, $post_id, $format_value);
 
    //Print arrays as comma-separated strings, as per get_field() behaviour.
    if( is_array($value) ) {
        $value = @implode( ', ', $value );
    }
 
    //Echo result
    echo $value;
}



function get_sub_field_safe($field_key, $escape_method = 'esc_html') {
  $field = get_sub_field($field_key);

  /* Check for null and falsy values and always return space */
  if($field === NULL || $field === FALSE) {
  	$field = '';
  }

  /* Handle arrays */
  if(is_array($field)) {
      $field_escaped = array();
      foreach($field as $key => $value) {
          $field_escaped[$key] = ($escape_method === NULL) ? $value : $escape_method($value);
      }
      return $field_escaped;
  }
  else {
  	return ($escape_method === NULL) ? $field : $escape_method($field);
  }
}

function the_sub_field_safe($field_key, $escape_method = 'esc_html') {
    //Get field
    $value = get_sub_field_safe($field_key, $escape_method);
 
    //Print arrays as comma-separated strings, as per get_field() behaviour.
    if( is_array($value) ) {
        $value = @implode( ', ', $value );
    }
 
    //Echo result
    echo $value;
}

