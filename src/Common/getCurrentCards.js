export default function getCurrentCards(array, currentPage, cardsPerPage) {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = array.slice(indexOfFirstCard, indexOfLastCard);
    return currentCards;
}