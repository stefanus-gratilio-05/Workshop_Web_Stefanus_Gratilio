export async function getCategory(){
    $.ajax({
        url : 'https://www.themealdb.com/api/json/v1/1/categories.php',
        type : 'GET',
        dataType : 'json',
        success : function(response){
            response.categories.map((item) => {
                renderCategories(item)
            })
        }, fail: function(err){
            console.error(err.message)
        }
    })
}

export async function getCategoryFoodByname(category){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        type : 'GET',
        dataType : 'json',
        success : function(response){
            removeElementFoodCategory()
            response.meals.map((item) => {
                renderCategoriesByName(item)
            })
        }
    })
}

export async function getFoodDetails(meals){
    $.ajax({
        url : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`,
        type : 'GET',
        dataType : 'json',
        success : function(response){
            removeElementFoodCategory()
            removeElementFood2Category()
            response.meals.map((item) => {
                renderDetailsByName(item)
            })
        }
    })
}

function removeElementFoodCategory(){
    $('#food-category').remove()
}

function removeElementFood2Category(){
    $('#food-detail').remove()
}

function renderCategories(item){
    $('#food-category').append(
        `<div class="category">
            <a href="?category=${item.strCategory}">
            <img src="${item.strCategoryThumb}">
                <h3 class="food_name">${item.strCategory}</h3>
            </a>
            <p class="food_description">${item.strCategoryDescription}</p>
        </div>`
    )
}

function renderCategoriesByName(item){
    $('#food-detail').append(
        `<div class="category2">
            <a href="?meals=${item.idMeal}">
                <img class="category2_images" src="${item.strMealThumb}">
                <h3 class="food_name">${item.strMeal}</h3>
            </a>
        </div>`
    )
}

function renderDetailsByName(item){
    $('#details').append(
        `<div>
            <img class="detail_image" src="${item.strMealThumb}">
            <div class="detail_title">
                <h2 class="food_name">${item.strMeal}</h2>
                <table width=100%>
                    <tr>
                        <td width=16% class="table_left"><h3>Origin :
                        <td width=16% class="table_right"><h3>${item.strArea}
                        <td width=17% class="table_left"><h3>Tags :
                        <td width=17% class="table_right"><h3>${item.strTags}
                        <td width=17% class="table_left"><h3>Category :
                        <td width=17% class="table_right"><h3>${item.strCategory}
                    </tr>
                </table>
            </div>
            <p class="food_description detail">${item.strInstructions}</p>
        </div>`
    )
}