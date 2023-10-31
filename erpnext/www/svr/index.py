import frappe

@frappe.whitelist()
def qr_code_tx(name_worker,entry_or_exit):
    # return name_worker
    if entry_or_exit=="Entry":
        if(frappe.db.exists("Contractors",name_worker)):
            if (frappe.db.exists("Contractor Attendance",name_worker+'-'+frappe.utils.nowdate())):
                return "Already marked for the day"
            else:
                doc = frappe.new_doc("Contractor Attendance")
                doc.worker_code=name_worker
                if doc.in_time==None:
                    doc.in_time=frappe.utils.now()[:18]#.split()[1][:5]
                
                doc.insert()
        else:
            return "Please check QR"
        
        return "Attendance Marked"
			
    else:
        if(frappe.db.exists("Contractors",name_worker)):
            if ((frappe.db.exists("Contractor Attendance",{'worker_code':name_worker})) and (frappe.get_doc("Contractor Attendance",{'worker_code': name_worker} ).out_time==None)):#+'-'+frappe.utils.nowdate())):				
                doc = frappe.get_doc("Contractor Attendance",{'worker_code': name_worker} )#all("Contractor Attendance",filters={'worker_code': name_worker}) # name_worker+'-'+frappe.utils.nowdate())
                # if doc.out_time==None:
                doc.out_time=frappe.utils.now()[:18]#.split()[1][:5]
            else:
                return "Already marked for the day"
            doc.save()
            return "Attendance Marked"
            # else:
            #     return "Please mark entry first"
        else:
            return "Please check QR"