# Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator


class Contractors(WebsiteGenerator):
	# pass
	
	def validate(self):
		self.qr_generator = f"https://api.qrserver.com/v1/create-qr-code/?size=500x500&data={self.name}"
		self.name_of_the_worker=self.name_of_the_worker.upper()
		# self.route = "123"

	

	# @frappe.whitelist()
	# def frm_call(self):
	# 	return "Hi"
	