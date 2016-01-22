/** Zurb Foundation Visual Editor for TinyMCE - v1.0.1
* http://findsomewinmore.com/
* Copyright (c) 2015; * Licensed GPLv2+ */

(function() {

  tinymce.create('tinymce.plugins.fiwi_foundationPlugin', {
    init : function(ed, url) {

      ed.addButton('fiwi_foundation', {
        title   : 'Foundation Elements',
        cmd     : 'fiwi_foundation',
        icon    : 'foundation-icon',
        type    : 'menubutton',
        menu    : [
          {
            text    : 'Row',
            onclick : function ( e ) {
              var selected_text = ed.selection.getContent();
              ed.insertContent( '<div class="row" data-equalizer>' + selected_text + '</div>' );
            }
          },
          {
            text    : 'Columns',
            onclick: function() {
              ed.windowManager.open( {
                title: 'Insert Columns',
                body: [
                  {
                    type: 'container',
                    html: "<p>"+ 'For each device width, select the number of columns you want.' +"</p><p>"+ "If you don't need one of the devices, leave it at 'No column'." +"</p>"
                  },
                  {
                    type: 'checkbox',
                    name: 'eq',
                    label: 'Equalize Column Height',
                    checked: false
                  },
                  {
                    type: 'listbox',
                    name: 'small',
                    label: 'Small',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'smallPush',
                    label: 'Small Push',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'smallPull',
                    label: 'Small Pull',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'medium',
                    label: 'Medium',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'mediumPush',
                    label: 'Medium Push',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'mediumPull',
                    label: 'Medium Pull',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'large',
                    label: 'Large',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'largePush',
                    label: 'Large Push',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'largePull',
                    label: 'Large Pull',
                    'values': [
                      {text: 'No Columns', value: '0'},
                      {text: '1 Column', value: '1'},
                      {text: '2 Columns', value: '2'},
                      {text: '3 Columns', value: '3'},
                      {text: '4 Columns', value: '4'},
                      {text: '5 Columns', value: '5'},
                      {text: '6 Columns', value: '6'},
                      {text: '7 Columns', value: '7'},
                      {text: '8 Columns', value: '8'},
                      {text: '9 Columns', value: '9'},
                      {text: '10 Columns', value: '10'},
                      {text: '11 Columns', value: '11'},
                      {text: '12 Columns', value: '12'}
                    ]
                  }
                ],
                onsubmit: function( e ) {

                  var grid = [],
                  selected_text = ed.selection.getContent(),
                  equalize = e.data.eq ? 'data-equalizer-watch' : '';

                  if(e.data.small && e.data.small !== '0')
                  grid.push('small-' + e.data.small);

                  if(e.data.medium && e.data.medium !== '0')
                  grid.push('medium-' + e.data.medium);

                  if(e.data.large && e.data.large !== '0')
                  grid.push('large-' + e.data.large);

                  if(e.data.smallPush && e.data.smallPush !== '0')
                  grid.push('small-push-' + e.data.smallPush);

                  if(e.data.mediumPush && e.data.mediumPush !== '0')
                  grid.push('medium-push-' + e.data.mediumPush);

                  if(e.data.largePush && e.data.largePush !== '0')
                  grid.push('large-push-' + e.data.largePush);

                  if(e.data.smallPull && e.data.smallPull !== '0')
                  grid.push('small-pull-' + e.data.smallPull);

                  if(e.data.mediumPull && e.data.mediumPull !== '0')
                  grid.push('medium-pull-' + e.data.mediumPull);

                  if(e.data.largePull && e.data.largePull !== '0')
                  grid.push('large-pull' + e.data.largePull);

                  var cols = grid.join(' ');

                  ed.insertContent( '<div class="columns '+ cols +'" '+equalize+'>' + selected_text + '</div>' );
                }
              });
            }
          },
          {
            text    : 'Block Grid',
            onclick: function() {
              ed.windowManager.open( {
                title: 'Insert Block Grid',
                body: [
                  {
                    type: 'container',
                    html: '<p>'+ 'For each device width, enter the number of items you want per row.' +'</p>'
                  },
                  {
                    type: 'textbox',
                    name: 'small',
                    label: 'Small',
                    value: '0'
                  },
                  {
                    type: 'textbox',
                    name: 'medium',
                    label: 'Medium',
                    value: '0'
                  },
                  {
                    type: 'textbox',
                    name: 'large',
                    label: 'Large',
                    value: '0'
                  },

                ],
                onsubmit: function( e ) {

                  var grid = [],
                  selected_text = ed.selection.getContent();

                  if( e.data.small && e.data.small !== '0' && isNaN(e.data.sall) )
                  grid.push('small-block-grid-' + e.data.small);

                  if( e.data.medium && e.data.medium !== '0' && isNaN(e.data.sall) )
                  grid.push('medium-block-grid-' + e.data.medium);

                  if( e.data.large && e.data.large !== '0' && isNaN(e.data.sall) )
                  grid.push('large-block-grid-' + e.data.large);

                  var cols = grid.join(' ');

                  ed.insertContent( '<ul class="'+ cols +'">'+ "\n\t" +'<li>'+ selected_text + '</li>'+ "\n" +'</ul>' );

                }
              });
            }
          },
          {
            text    : 'Buttons',
            onclick: function() {
              ed.windowManager.open( {
                title: 'Insert Button',
                body: [
                  {
                    type: 'container',
                    html: "<p>"+ 'Select the size, color and style option for your button' +"</p>"
                  },
                  {
                    type: 'textbox',
                    name: 'url',
                    label: 'URL',
                    value: '#'
                  },
                  {
                    type: 'checkbox',
                    name: 'target',
                    label: 'Open in new tab?',
                    checked: false
                  },
                  {
                    type: 'listbox',
                    name: 'size',
                    label: 'Size',
                    'values': [
                      {text: 'Default', value: ''},
                      {text: 'Tiny', value: 'tiny'},
                      {text: 'Small', value: 'small'},
                      {text: 'Large', value: 'large'},
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'color',
                    label: 'Color',
                    'values': [
                      {text: 'Primary', value: 'primary'},
                      {text: 'Secondary', value: 'secondary'},
                      {text: 'Success', value: 'success'},
                      {text: 'Alert', value: 'alert'},
                      {text: 'info', value: 'info'},
                      {text: 'disabled', value: 'disabled'},
                    ]
                  },
                  {
                    type: 'listbox',
                    name: 'style',
                    label: 'Style',
                    'values': [
                      {text: 'Square', value: ''},
                      {text: 'Round', value: 'round'},
                      {text: 'Radius', value: 'radius'},
                    ]
                  }
                ],
                onsubmit: function( e ) {

                  var size = e.data.size,
                  color = e.data.color,
                  style = e.data.style,
                  url = e.data.url,
                  target = e.data.target ? 'target="_blank"' : '',
                  selected_text = ed.selection.getContent();
                  button = size + ' ' + color + ' ' + style;

                  ed.insertContent( '<a href="'+url+'" '+ target +' class="button '+ button +'">' + selected_text + '</a>' );
                }
              });
            }
          },
          {
            text    : 'Alerts',
            onclick: function() {
              ed.windowManager.open( {
                title: 'Insert Button',
                body: [
                  {
                    type: 'container',
                    html: "<p>"+ 'Enter the message and select a color for your alert box' +"</p>"
                  },
                  {
                    type: 'textbox',
                    name: 'message',
                    label: 'Message',
                    value: ''
                  },
                  {
                    type: 'listbox',
                    name: 'color',
                    label: 'Color',
                    values: [
                      {text: 'Success', value: 'success'},
                      {text: 'Warning', value: 'warning'},
                      {text: 'Info', value: 'info'},
                      {text: 'Alert', value: 'alert'},
                      {text: 'Secondary', value: 'secondary'},
                    ]
                  }
                ],
                onsubmit: function( e ) {

                  var message = e.data.message !== "" ? e.data.message : ed.selection.getContent(),
                  color = e.data.color;

                  ed.insertContent( '<div data-alert class="alert-box '+ color +'">' + message + '</div>' );
                }
              });
            }
          }
        ]
      });

    }
  });

  tinymce.PluginManager.add("fiwi_foundation", tinymce.plugins.fiwi_foundationPlugin);

})();
