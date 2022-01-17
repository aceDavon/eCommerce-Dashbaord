$(document).ready(function () {

    $.ajax({
        url: "https://fakestoreapi.com/products?limit=15",
        method: "GET",
        success: function (response) {
            console.log(response);
            $(response).each(function (i, data) { 
                let prodTable =`
            <tr>
                <td><input type="checkbox" name="" id=""></td>
                <td>${data.title}</td>
                <td>${data.category}</td>
                <td class="blue"><a href="#">15</a></td>
                <td>£${data.price}</td>
            </tr>`;

            
            $('.order-data').append(prodTable);
            });
        }
    });
    let sideBar = `
                    <div class="logo">
                    <h3 class="logo-txt">
                        sassi holford
                    </h3>
                        </div>
                        <ul class="dashboard">
                            <li><a href="#" class="side-menu-links">dashboard</a></li>
                        </ul>
                        <ul class="side-menu-items">
                            <label for="store" class="menu-label">store</label>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/landing-page.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Pages</a>
                                <span class="link-icon">
                                    <img src="./assets/images/icons/next.png" alt="" class="next-btn1">
                                </span>
                                <ul class="menu-list-level2-1">
                                    <li><a href="#" class="side-menu-links">Pricing</a></li>
                                    <li><a href="#" class="side-menu-links">Careers</a></li>
                                    <li><a href="#" class="side-menu-links">Blog</a></li>
                                    <li><a href="#" class="side-menu-links">FAQ</a></li>
                                    <li><a href="#" class="side-menu-links">our Team</a></li>
                                </ul>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/account.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Account</a>
                                <span class="link-icon">
                                    <img src="./assets/images/icons/next.png" alt="" class="next-btn2">
                                </span>
                                <ul class="menu-list-level2-2">
                                    <li><a href="#" class="side-menu-links">Overview</a></li>
                                    <li><a href="#" class="side-menu-links">Settings</a></li>
                                    <li><a href="#" class="side-menu-links">Security</a></li>
                                    <li><a href="#" class="side-menu-links">Transactions</a></li>
                                    <li><a href="#" class="side-menu-links">API Keys</a></li>
                                </ul>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/product.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Product</a>
                                <span class="link-icon">
                                    <img src="./assets/images/icons/next.png" alt="" class="next-btn3">
                                </span>
                                <ul class="menu-list-level2-3">
                                    <li><a href="#" class="side-menu-links">All Proucts</a></li>
                                    <li><a href="#" class="side-menu-links">Category</a></li>
                                    <li><a href="#" class="side-menu-links">Add Product</a></li>
                                    <li><a href="#" class="side-menu-links">Remove Product</a></li>
                                    <li><a href="#" class="side-menu-links">Logistics</a></li>
                                </ul>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/user.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Users</a>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/order.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Orders</a>
                            </li>
                        </ul>
                        <ul class="side-menu-items">
                            <label for="apps" class="menu-label">apps</label>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/services.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Projects</a>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/ecommerce.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">eCommerce</a>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/school.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">School Portal</a>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/businessman.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">CRM</a>
                            </li>
                            <li>
                                <span class="side-icons">
                                    <img src="./assets/images/icons/customer-service.png" alt="">
                                </span>
                                <a href="#" class="side-menu-links">Support Center</a>
                            </li>
                        </ul>
    `;

    $('.sidebar').append(sideBar);

    $('.next-btn3').click(function () { 
        $('.menu-list-level2-3').toggleClass('show');
        $('.menu-list-level2-3').toggle();
        
    });
    $('.next-btn2').click(function () { 
        $('.menu-list-level2-2').toggleClass('show');
        $('.menu-list-level2-2').toggle();
        
    });
    $('.next-btn1').click(function () { 
        $('.menu-list-level2-1').toggleClass('show');
        $('.menu-list-level2-1').toggle();
        
    });
});