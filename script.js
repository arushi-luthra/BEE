let selectedCard = null;

        function selectCard(card) {
            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }
            selectedCard = card;
            selectedCard.classList.add('selected');
        }

        function confirmBooking() {
            if (selectedCard) {
                alert(`Booking Confirmed for: ${selectedCard.querySelector('h3').textContent}`);
            } else {
                alert('Please select a card before confirming your booking.');
            }
        }