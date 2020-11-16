$(document).ready(() => {
    new Product();
});

class Product{
    private code: JQuery = $('#Code');
    private codeDel: JQuery = $('#CodeDel');
    private description: JQuery = $('#Description');
    private status: JQuery = $('#Status');
    private isDefective: JQuery = $('#IsDefective');
    private items: JQuery = $('#items');
    private btnAdd: JQuery = $('#btnAdd');
    private btnDelete: JQuery = $('#btnDelete');
    constructor() {
        $.ajax({
            url: 'https://localhost:44305/Api/Product',
            data: {},
            type: 'GET',
            success: (response, status, jqXhr) => {
                for (let item of response) {
                    this.items.html('<tr>< th scope = "row">' + item.Id + '</th> <td>' + item.Code + '</td><td>' + item.Name + '</td><td>' + item.Status + '</td><td>' + item.IsDefective + '</td></tr>');
                }
            },
            error: (jqXhr, status, error) => {
                alert("nO SE PUDIERON CARGAR LOS PRODUCTOS")
            }
        });

        this.btnAdd.click(e => {
            $.ajax({
                type: 'POST',
                url: 'https://localhost:44305/Api/Product/SaveProduct',
                data: {
                    Code: this.code.val(), Name: this.description.val(), Status: this.status.val(), IsDefective: this.isDefective.prop(":checked") },
                success: (response, status, jqXhr) => {
                    alert("Guardado");
                },
                error: (jqXhr, status, error) => {
                    alert("Ha ocurrido un error inesperado" + error);
                }
            });
        })

        this.btnDelete.click(e => {
            $.ajax({
                type: 'DELETE',
                url: 'https://localhost:44305/Api/Product/Delete/' + this.codeDel.val(),
                data: {
                    Code: this.code.val(), Name: this.description.val(), Status: this.status.val(), IsDefective: this.isDefective.prop(":checked")
                },
                success: (response, status, jqXhr) => {
                    alert("Eliminado");
                },
                error: (jqXhr, status, error) => {
                    alert("Ha ocurrido un error inesperado" + error);
                }
            });
        })
    }
}