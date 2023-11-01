// // Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// // For license information, please see license.txt

// frappe.ui.form.on("Contractors", {
// refresh (frm) {
//     frm.call({
//         doc:frm.doc,
//         method: 'frm_call',
//         callback: function(r){
//             frappe.msgprint(r.message)
//         }
//     });
// }
// })
   
//     // frappe.msgprint(
//     //     `
//     //     <div class="custom-msg-dialog" style="background-image: url('path/to/your-image.png'); background-size: cover; background-repeat: no-repeat;">
//     //         <div class="custom-msg-content" style="background: rgba(255, 255, 255, 0.9); border: 1px solid #ccc; border-radius: 5px;">
//     //             <div class="custom-msg-header" style="background-color: #f5f5f5; padding: 10px;">
//     //                 <h3>Click Entry or Exit to mark your attendance</h3>
//     //             </div>
                
//     //         </div>
//     //     </div>
//     //     `,
//     //             "Your Custom Dialog Title",)
//         frappe.msgprint(
//         {
//         title: __('To Contractor Attendance'),
//         message: __('Click Entry to mark entry attendance or Click Exit to mark exit attendance'),
//         primary_action: {
//             // label: 'Entry',
//             action() {
//                 console.log("Entry");
//             }
//         },
//         secondary_action: {
//             label: 'Exit',
//             action() {
//                 console.log("Exit");
//             }
//         },
//             })
//     .$wrapper.css({
//         'color': 'Orange',
//         'background-color': '#3498db',  // Blue background color
//         'border': '15px solid #2980b9',  // Darker blue border
//         'text-align': 'center',
//         'font-family': 'Verdana',
//         'font-size': '18px',
//         'padding': '20px',
//         'position': 'fixed',
//         'top': '50%',
//         'left': '50%',
//         'transform': 'translate(-50%, -50%)',  // Center the box horizontally and vertically
//         'box-shadow': '0 0 100px rgba(0, 0, 0, 0.2)',
//         'border-radius': '5px',
//         'width': '1500px'
//     });
    
//     // Style the primary and secondary buttons
   
    
//     // frappe.msgprint({
//     //     title: __('Notification'),
//     //     message: __('Are you sure you want to proceed?'),
//     //     primary_action:{
//     //         'label':'Entry',
//     //         action() {
//     //             console.log("Entry");
//     //             // frappe.msgprint("Entry");
//     //         }
//     //     },
//     //     secondary_action:{
//     //         'label':'Exit',
//     //         action() {
//     //             console.log("Exit");
//     //             // frappe.msgprint("Exit");

//     //         }
//     //     }
//     // }).$wrapper.css({
//     //         'color': 'red',
//     //         'background-color': 'yellow',
//     //         'border': '10px solid blue',
//     //         'text-align':'center',
//     //         'font-family': 'verdana',
//     //         'font-size': '40px',
//     //         // 'opacity':'0.5',
//     //         // 'width':'800px',
//     //         // 'margin':'30px',
//     //         'padding':'40px'
//     //         // Add more CSS rules here
//     //     });
//         // ;
//     // frappe.msgprint({
//     //     title: __('Notification'),
//     //     message: __('Are you sure you want to proceed?'),
//     //     primary_action: {
//     //     'label': 'Proceed',
//     //     // either one of the actions can be passed
//     //     'server_action': ()=>{
//     //         frm.call({
//     //             doc: frm.doc,
//     //             method: 'frm_call',
//     //             // args: {
//     //             //     name_worker: nameWorker,
//     //             //     entry_or_exit: user_option,
//     //             // },
//     //             callback: function (r) {
//     //                 frappe.msgprint(r.message)
//     //             },
//     //             css: `<style>.frappe-ui-scanner { background-color: #ffffff; }</style>`,
//     //         });
//     //     },
//     //     }
//     // });
//     // function my_server_action(){
//     //     // frappe.msgprint("THank you")
//     //     // server_call
        
//     // }
// }
// })
//     // Create a new QR code scanner.
//     // var scanner = new Html5QrcodeScanner("qr-reader");
  
//     // // Add an event listener for the `scan` event.
//     // scanner.addEventListener("scan", function(event) {
//     //   // Get the scanned QR code.
//     //   var decodedText = event.detail.decodedText;
  
//     //   // Make an API call to store the scanned QR code in the Frappe database.
//     //   frappe.ui.form.get_active_form().call({
//     //     method: "frm_call",
//     //     args: {
//     //       qr_code: decodedText
//     //     },
//     //     callback: function(response) {
//     //       // Handle the response.
//     //       frappe.msgprint(response.message);
//     //     }
//     //   });
//     // });
  
//     // // Start the scanner.
//     // scanner.start();
// //   });
  
      

//         // });
//     //     frappe.msgprint(
//     //         `
//     // <div class="custom-msg-dialog" style="background-image: url('path/to/your-image.png'); background-size: cover; background-repeat: no-repeat;">
//     //     <div class="custom-msg-content" style="background: rgba(255, 255, 255, 0.9); border: 1px solid #ccc; border-radius: 5px;">
//     //         <div class="custom-msg-header" style="background-color: #f5f5f5; padding: 10px;">
//     //             <h3>Your Custom Title</h3>
//     //         </div>
//     //         <div class="custom-msg-body" style="padding: 20px; font-size: 16px;">
//     //             Your message or content goes here.
//     //         </div>
//     //     </div>
//     // </div>
//     // `,
//     //         "Your Custom Dialog Title"
//     //     );



