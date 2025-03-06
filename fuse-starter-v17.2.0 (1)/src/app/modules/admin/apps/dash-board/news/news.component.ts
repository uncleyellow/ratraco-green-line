import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  partners = [
    { name: 'Uber Freight', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'ECHO', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'KERRY', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'CQC', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'C.H. ROBINSON', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'ARRIVE LOGISTICS', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'RXO', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'Sherwin-Williams', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' },
    { name: 'Lineage', image: 'https://banner2.cleanpng.com/20180409/qzw/avg8avh1i.webp' }
  ];
  

  feedbacks = [
    { text: "Green Line Logistics has proven to be flexible and dependable, constantly delivering exceptional transportation solutions.", author: "Julian Lambert", company: "Pacific Tech" },
    { text: "Their transparency and willingness to collaborate directly with our team have significantly enhanced our service quality.", author: "Cameron Jolley", company: "Priority One" },
    { text: "Green Line Logistics has been a partner we can truly trust for reliable and consistent service.", author: "Nathan Wright", company: "Arrive Logistics" },
    { text: "Green Line Logistics has been a partner we can truly trust for reliable and consistent service.", author: "Nathan Wright", company: "Arrive Logistics" },
    { text: "Green Line Logistics has been a partner we can truly trust for reliable and consistent service.", author: "Nathan Wright", company: "Arrive Logistics" },
    { text: "Green Line Logistics has been a partner we can truly trust for reliable and consistent service.", author: "Nathan Wright", company: "Arrive Logistics" },
    { text: "Green Line Logistics has been a partner we can truly trust for reliable and consistent service.", author: "Nathan Wright", company: "Arrive Logistics" },
  ];

  currentIndex = 0;
  itemsPerPage = 3;

  get pagedFeedbacks() {
    return this.feedbacks.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentIndex + this.itemsPerPage < this.feedbacks.length) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  prevPage() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }
}
