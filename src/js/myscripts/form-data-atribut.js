$('.js-popup-form').on('click', function(e) {
	e.preventDefault();

	// Получаем значение из data параметров
	var dataTitleJsPopupBtn = $(this).attr('data-title'); // для заголовка формы
	var dataDescrJsPopupBtn = $(this).attr('data-descr'); // описание для скрытого инпута
	// Получаем id формы
	var hrefJsPopupForm = $(this).attr('href'); // вытаскиваем id формы

	// console.log(dataTitleJsPopupBtn); //проверка переменных

	// Находим скрытое поле, куда будем записывать data данные
	var hiddenInputJsPopupForm = hrefJsPopupForm + ' .form-title';
	// console.log(hiddenInputJsPopupForm); // Проверяем правильность скрытое поля
	// Записываем в скрытое поле значение data параметра
	$(hiddenInputJsPopupForm).attr('value', dataDescrJsPopupBtn);

	// Находим скрытое поле, куда будем записывать data данные
	var titleInputJsPopupForm = hrefJsPopupForm + ' h3';
	// Проверяем правильность скрытое поля
	// console.log(titleInputJsPopupForm);
	// Записываем в скрытое поле значение data параметра
	$(titleInputJsPopupForm).text(dataTitleJsPopupBtn);
});
