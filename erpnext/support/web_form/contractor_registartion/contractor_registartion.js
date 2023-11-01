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
   

}) 
//     frappe.web_form.validate = () => {
// 	// bind events here
//    frappe.msgprint("Registrat")
// }



	
		
	