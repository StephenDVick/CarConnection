(function (global) {
    var LoginViewModel,
        app = global.app = global.app || {};

    LoginViewModel = kendo.data.ObservableObject.extend({
        isLoggedIn: false,
        username: "",
        password: "",
        
        onLogin: function () {
            kendo.mobile.application.showLoading();
            var that = this,
                username = that.get("username").trim(),
                password = that.get("password").trim();
			
            
            if (username === "" || password === "") {
                navigator.notification.alert("Both fields are required!",
                    function () { }, "Login failed", 'OK');

                kendo.mobile.application.hideLoading();
                return;
            }
            
            setTimeout(function () { 
                that.set("isLoggedIn", true);
                kendo.mobile.application.hideLoading();
                app.application.navigate('#dashboard', 'zoom'); }, 2000);
        },

        onLogout: function () {
            var that = this;

            that.clearForm();
            that.set("isLoggedIn", false);
        },

        clearForm: function () {
            var that = this;

            that.set("username", "");
            that.set("password", "");
        },

        checkEnter: function (e) {
            var that = this;

            if (e.keyCode == 13) {
                $(e.target).blur();
                that.onLogin();
            }
        }
    });

    app.loginService = {
        viewModel: new LoginViewModel()
    };
})(window);