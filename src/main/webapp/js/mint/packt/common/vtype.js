Ext.apply(Ext.form.field.VTypes, {  // customer vtype, can put init function of a Controller, inside the launch function of app.js
    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val); //validate if have num, a-z, A-Z, @#*% 6-20 chars
	},
	customPassText: 'Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one specialsymbol @#$% and between 6 and 20 characters.'
});