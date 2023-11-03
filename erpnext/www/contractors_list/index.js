// document.getElementById("get_list").addEventListener("click",function() {
    frappe.ready(function() {
    // Use frappe.get_list to retrieve the list of documents
    frappe.call({
        method: 'frappe.client.get_list',
        args: {
            doctype: 'Contractors', // Replace with the name of your doctype
            fields: ['name','name_of_the_worker', 'current_address', 'contact_number','aadhar_number','qr_generator','breakfast','lunch','dinner','accommodation_request','transport_request'], // Specify the fields you want to display
            filters: [], // Apply filters if needed
        },
        callback: function(response) {
            var data = response.message;

            if (data && data.length > 0) {
                // Build the HTML table
                var tableHtml = '<table border="1"><thead><tr>';
                
                // Create table headers from field names
                for (var key in data[0]) {
                    if (key == 'name_of_the_worker'){
                    tableHtml += '<th> NAME </th>';
                    }
                    else if (key == 'name'){
                        tableHtml += '<th> ID </th>';
                        }
                        else if (key == 'current_address'){
                            tableHtml += '<th> CURRENT ADDRESS </th>';
                            }
                            else if (key == 'contact_number'){
                                tableHtml += '<th> CONTACT NO </th>';
                                }
                                else if (key == 'aadhar_number'){
                                    tableHtml += '<th> AADHAR NO </th>';
                                    }
                                    else if (key == 'qr_generator'){
                                        tableHtml += '<th> QR CODE </th>';
                                        }
                                        else if (key == 'accommodation_request'){
                                            tableHtml += '<th> ACCOMODATION </th>';
                                            }
                                            else if (key == 'transport_request'){
                                                tableHtml += '<th> TRAVEL </th>';
                                                }
                    else{
                        tableHtml += '<th>' + key.toUpperCase() + '</th>';
                    }
                }
                
                tableHtml += '</tr></thead><tbody>';

                // Create table rows from data
                for (var i = 0; i < data.length; i++) {
                    tableHtml += '<tr>';
                    for (var key in data[i]) {
                        if (key=='qr_generator'){
                            // tableHtml += '<td>' + '<a href="'+data[i][key]+'" download><img src="'+data[i][key]+'" alt="QR" width="100px" height="100px"></a>' + '</td>';
                            tableHtml += '<td>' + `<a href=${data[i][key]} download ><img src=${data[i][key]} alt="QR" width="30px" height="30px" id="open-overlay-link"></a>` + '</td>';

                        }
                        else if(key=='name_of_the_worker'){
                            tableHtml += '<td>' + `<a href=${data[i][key]} >${data[i][key]}</a>` + '</td>';


                        }
                        else if(key == 'breakfast' || key =='lunch' || key=='dinner'){
                            const x = (data[i][key] === 1)?"Yes":"No"
                        tableHtml += '<td>' +  x + '</td>';

                        }
                        else{
                        tableHtml += '<td>' + data[i][key]  + '</td>';

                        }
                        
                    }
                    tableHtml += '</tr>';
                }
                
                tableHtml += '</tbody></table>';

                // Append the table to the container
                document.getElementById('table-container').innerHTML = tableHtml;
            } else {
                // Handle the case when there are no records
                document.getElementById('table-container').innerHTML = 'No records found.';
            }
        }
    });
});
