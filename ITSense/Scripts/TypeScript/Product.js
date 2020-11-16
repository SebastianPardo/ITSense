$(document).ready(function () {
    new Product();
});
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.code = $('#Code');
        this.codeDel = $('#CodeDel');
        this.description = $('#Description');
        this.status = $('#Status');
        this.isDefective = $('#IsDefective');
        this.items = $('#items');
        this.btnAdd = $('#btnAdd');
        this.btnDelete = $('#btnDelete');
        $.ajax({
            url: 'https://localhost:44305/Api/Product',
            data: {},
            type: 'GET',
            success: function (response, status, jqXhr) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var item = response_1[_i];
                    _this.items.html('<tr>< th scope = "row">' + item.Id + '</th> <td>' + item.Code + '</td><td>' + item.Name + '</td><td>' + item.Status + '</td><td>' + item.IsDefective + '</td></tr>');
                }
            },
            error: function (jqXhr, status, error) {
                alert("nO SE PUDIERON CARGAR LOS PRODUCTOS");
            }
        });
        this.btnAdd.click(function (e) {
            $.ajax({
                type: 'POST',
                url: 'https://localhost:44305/Api/Product/SaveProduct',
                data: {
                    Code: _this.code.val(), Name: _this.description.val(), Status: _this.status.val(), IsDefective: _this.isDefective.prop(":checked")
                },
                success: function (response, status, jqXhr) {
                    alert("Guardado");
                },
                error: function (jqXhr, status, error) {
                    alert("Ha ocurrido un error inesperado" + error);
                }
            });
        });
        this.btnDelete.click(function (e) {
            $.ajax({
                type: 'DELETE',
                url: 'https://localhost:44305/Api/Product/Delete/' + _this.codeDel.val(),
                data: {
                    Code: _this.code.val(), Name: _this.description.val(), Status: _this.status.val(), IsDefective: _this.isDefective.prop(":checked")
                },
                success: function (response, status, jqXhr) {
                    alert("Eliminado");
                },
                error: function (jqXhr, status, error) {
                    alert("Ha ocurrido un error inesperado" + error);
                }
            });
        });
    }
    return Product;
}());
//# sourceMappingURL=Product.js.map