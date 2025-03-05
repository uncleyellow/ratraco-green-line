import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { FuseCardComponent } from '@fuse/components/card';
import { DialogComponent } from './dialog-buy/dialog-buy.component';
import Swal from 'sweetalert2';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector       : 'cards',
    templateUrl    : './cards.component.html',
    styles         : [
        `
            cards fuse-card {
                margin: 16px;
            }
        `
    ],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements AfterViewInit
{
    @ViewChildren(FuseCardComponent, {read: ElementRef}) private _fuseCards: QueryList<ElementRef>;

    filters: string[] = ['all', 'article', 'listing', 'list', 'info', 'shopping', 'pricing', 'testimonial', 'post', 'interactive'];
    numberOfCards: any = {};
    selectedFilter: string = 'all';

    /**
     * Constructor
     */
    constructor(
        private _renderer2: Renderer2,
        private dialog: MatDialog,
        private translocoService: TranslocoService
    )
    {
 
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    getTranslatedText(key: string): string {
        return this.translocoService.translate(key);
    }
    ngAfterViewInit(): void
    {
        
        // Calculate the number of cards
        this._calcNumberOfCards();

        // Filter the cards for the first time
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On filter change
     *
     * @param change
     */
    onFilterChange(change: MatButtonToggleChange): void
    {
        // Set the filter
        this.selectedFilter = change.value;

        // Filter the cards
        this._filterCards();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _calcNumberOfCards(): void
    {
        // Prepare the numberOfCards object
        this.numberOfCards = {};

        // Prepare the count
        let count = 0;

        // Go through the filters
        this.filters.forEach((filter) => {

            // For each filter, calculate the card count
            if ( filter === 'all' )
            {
                count = this._fuseCards.length;
            }
            else
            {
                count = this.numberOfCards[filter] = this._fuseCards.filter(fuseCard => fuseCard.nativeElement.classList.contains('filter-' + filter)).length;
            }

            // Fill the numberOfCards object with the counts
            this.numberOfCards[filter] = count;
        });
    }

    /**
     * Filter the cards based on the selected filter
     *
     * @private
     */
    private _filterCards(): void
    {
        // Go through all fuse-cards
        this._fuseCards.forEach((fuseCard) => {

            // If the 'all' filter is selected...
            if ( this.selectedFilter === 'all' )
            {
                // Remove hidden class from all cards
                fuseCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else
            {
                // If the card has the class name that matches the selected filter...
                if ( fuseCard.nativeElement.classList.contains('filter-' + this.selectedFilter) )
                {
                    // Remove the hidden class
                    fuseCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else
                {
                    // Add the hidden class
                    fuseCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }

    openDialog() {
        const item = {
          name: 'Most beautiful and quite places to see',
          image: 'https://baohanam.com.vn/DATA/IMAGES/2020/06/ly-do-nen-du-lich-bang-tau-hoa-56-0.jpg',
          description: 'From rocky mountains to crystal clear lakes, there are the places you must see and enjoy.'
        };
    
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '600px',
          data: { item }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result?.confirmed) {
            console.log('Người dùng đã chọn:', result.quantity);
            Swal.fire({
                title: "Thanh toán thành công",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://i.gifer.com/yC.gif")
                  left top
                  no-repeat
                `
              });
          } else {
            console.log('Người dùng đã hủy.');
          }
        });
      }
}
