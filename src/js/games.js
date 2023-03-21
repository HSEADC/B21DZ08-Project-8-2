import '../css/games.css'

const CardsList = document.querySelector('.C_CardsList'); // Находим список карточек с играми на странице
const FiltersList = document.querySelector('.С_GamesListContentFilters'); // Находим список фильтров на странице
const Cards = CardsList.querySelectorAll('.M_CardCover'); // Находим все карточки с играми внутри списка с карточками

// функция изменения цвета 

function coverChange(genre) {
    CardsList.classList.remove('all-active');
    Cards.forEach(Card => {
            const CardCover = Card.getAttribute('data-genre') // Объявляем переменную с обложкой, куда записвываем значение дата-атрибута карточки с помощья метода getAttribute. Т.е просто находим в разметке дата-атрибут, берем его значение и записываем в эту переменную. Так происходит с каждым элементом внутри метода forEach

            if(CardCover === genre) {
                Card.classList.add('active') 
            }
        })
}

// Функция удаления цвета 

function removeColor(genre) {
  Cards.forEach(Card => {
    const CardCover = Card.getAttribute('data-genre');
    if(CardCover === genre) { // Дословно "Если жанр карточки строго равен тому, который пришел по клику"
      Card.classList.remove('active')
    }
  })
}

// 3

function activeGenresCounter() {
    let count = CardsList.querySelectorAll('.M_CardCover.active').length;
    if(count === 0) {
      CardsList.classList.add('all-active');
    }
    console.log(count)
  }
   
  // Навешиваем обработчик события клик на список 
  FiltersList.addEventListener('click', function(e) { 
    const target = e.target;
    const genre = target.getAttribute('data-btn-genre'); 
    target.classList.toggle('active');
    
    target.classList.contains('active') ? coverChange(genre) : removeColor(genre); 
  })
