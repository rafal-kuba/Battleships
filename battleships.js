
    
       var location1 = 3;
       var location2 = 4;
       var location3 = 5;
       var guess;
       var hits = 0;
       var guesses = 0;
       var isSunk = false;

alert("Aby zatopić okręt, potrzebujesz trafić 3 pola obok siebie. Łączna liczba pól jest w kolejności od 1-6");
       
while (isSunk == false){ /* Pętla działa dopóki zmienna isSunk nie ma wartości true */
    
    guess = prompt("Gotów, cel, pal! (podaj pole z zakresu od 0-6):"); /* Pobiera dane od użytkownika */
        if ( guess < 0 || guess > 6){ /* Jeśli wartość jest niezgodna z wartościami komórek, system podaje alert o nieprawidłowym numerze */
            alert("Proszę podać prawidłowy numer komórki!");
            
        } else if (guess == null) { /* Jeśli użytkownik wciśnie anuluj w okienku, gra się zakończy. */
            alert("KONIEC GRY");
            break;
            
        } else {
            guesses = guesses + 1; /* Jeśli podana przez użytkownika wartość jest poprawna - do zmiennej guesses dodawany jest 1 */
        }
            if (guess == location1 || guess == location2 || guess == location3){ /* Operator logiczny LUB sprawdza czy któraś z wartości zmiennych, w których zapisana jest pozycja statku została trafiona przez użytkownika */
                hits = hits + 1; /* Jeśli warunek został spełniony, dodaje jeden do wartości  */
                
            } 
                if (guess == location1 || guess == location2 || guess == location3 && hits !== 3) {
                /* Instrukcja warunkowa zadzaiała jeśli zostanie trafiona któraś z lokacji okrętu ORAZ zmienna hits będzie mniejsza, bądź równa wartości 2 */
                
                    alert("Okręt został trafiony. Pozostał(y) " + (3 - hits) + " strzały do zatopienia okrętu");
                }
                    if (hits == 3){ /* Warunek spełniony jeśli wartość zmiennej hits równa się 3  */
                    isSunk = true; /* Zmienna isSunk zmienia wartość na true */ 
                    alert("Zatopiłeś okręt!");
                    } /* Pętla się kończy. */
    
}
    
var stats = "Potrzebowałeś " + guesses + " prób by zatopić okręt. " +
    "Twoja efektywność wynosi " + (3/guesses) + ".";

alert(stats);