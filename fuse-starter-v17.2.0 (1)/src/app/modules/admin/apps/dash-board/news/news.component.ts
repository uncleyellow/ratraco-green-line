import { Component } from '@angular/core';

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

  newsList = [
    {
      title: 'Innovative Transport Solutions',
      description: 'Discover how Green Line Logistics is revolutionizing freight transportation with cutting-edge solutions.',
      fullContent: 'Green Line Logistics is leveraging advanced AI-powered logistics and IoT solutions to enhance real-time tracking and predictive analytics, ensuring efficiency across the entire supply chain.',
      image: 'assets/images/news/news1.jpg'
    },
    {
      title: 'Supply Chain Efficiency',
      description: 'Learn how to optimize your supply chain with advanced logistics strategies from industry experts.',
      fullContent: 'By utilizing smart routing algorithms and blockchain technology, businesses can streamline operations, reduce delays, and enhance transparency in supply chain management.',
      image: 'assets/images/news/news2.jpg'
    },
    {
      title: 'Sustainable Logistics',
      description: 'Green Line Logistics is committed to reducing carbon emissions with eco-friendly transport methods.',
      fullContent: 'The adoption of electric trucks, optimized route planning, and renewable energy sources is helping companies minimize their carbon footprint while maintaining efficiency.',
      image: 'assets/images/news/news3.jpg'
    }
  ];

  expandedNewsIndex: number | null = null;
  
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

  toggleExpand(index: number) {
    this.expandedNewsIndex = this.expandedNewsIndex === index ? null : index;
  }
}
