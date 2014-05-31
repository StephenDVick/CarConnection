(function (global) {
    var DashboardViewModel,
        app = global.app = global.app || {}; 
    
    DashboardViewModel = kendo.data.ObservableObject.extend({
        vehicleName: '',

        toggleLoading: function () {
            if (this._isLoading) {
                kendo.mobile.application.showLoading();
            } else {
                kendo.mobile.application.hideLoading();
            }
        },
        
        init: function () {
            var that = this;

            that.vehicleName = 'Hassan Car';
            
            
            kendo.data.ObservableObject.fn.init.apply(that, []);   
        }
    });

    app.dashboardService = {
        viewModel: new DashboardViewModel()
    };
}
)(window);