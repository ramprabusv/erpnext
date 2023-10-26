# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ContractorAttendance(Document):
	# pass
	@frappe.whitelist()
	def frm_call(self,name_worker):
		
		if(frappe.db.exists("Contractors",name_worker)):
			if (frappe.db.exists("Contractor Attendance",name_worker+'-'+frappe.utils.nowdate())):				
				doc = frappe.get_doc("Contractor Attendance", name_worker+'-'+frappe.utils.nowdate())
				if doc.out_time==None:
					doc.out_time=frappe.utils.now().split()[1][:5]
				doc.save()
				return "Exit"
			else:
				doc = frappe.new_doc("Contractor Attendance")
				doc.worker_code=name_worker
				if doc.in_time==None:
					doc.in_time=frappe.utils.now().split()[1][:5]
				doc.insert()
				return "Entry"
		else:
			return "Nope"


