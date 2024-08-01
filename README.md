# Тестирование

## Запуск программы

```bash
npm i
npm run test
```

## Описание работы
Было протестировано 4 случая преобразования: 

- foreign physical
- domestic physical
- foreign juridical
- domestic juredical
И все они закончились успешным тестированием:

```bash
  √ should convert domestic juridical person correctly (3 ms)
  √ should convert foreign physical person correctly
  √ should convert foreign juridical person correctly
  √ should convert domestic physical person correctly (1 ms)
```

При тестинге была обнаружена маленькая ошибка, которая могла мешать конкатенации элементов массива.
Данное поле объекта надо было изменить:

```js
  personInForm.isForeign ? null : 'foreign', // неправильный вариант, проверка неккоректна
  personInForm.isForeign ? 'foreign' : null, // правильный вариант, проверка теперь проходит
``` 