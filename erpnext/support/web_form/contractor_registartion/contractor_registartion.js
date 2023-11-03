frappe.ready(function() {
    frappe.msgprint({
        title: __('Note to Agnikul Supervisor'),
        indicator: 'red',
        message: __('Register with all the mandatory documents in hand.'),
    }).$wrapper.css({
                'color': 'Red',
               'text-align': 'center',
                'background-color':'rgba(60, 179, 113, 0.5)',
                'font-family': 'proxima-nova', 
                'font-size': '20px',
                'padding': '50px',
                'position': 'center',
                'border': '10px solid #ffa500',
                'border-radius': '5px',
            });
            // frappe.msgprint({
            //     title: __('Notification'),
            //     message: __('Are you sure you want to proceed?'),
            //     primary_action: {
            //     'label': 'Proceed',
            //     // either one of the actions can be passed
            //     'server_action': 'erpnext.support.web_form.contractor_registartion.contractor_registartion.get_context',
            //     // 'client_action': 'dotted_path.to_method',
            //     // 'args': {context:"123"
            //     // }
            //     }
            // });
   

}) 
//     frappe.web_form.validate = () => {
// 	// bind events here
//    frappe.msgprint("Registrat")
// }



	
		
	