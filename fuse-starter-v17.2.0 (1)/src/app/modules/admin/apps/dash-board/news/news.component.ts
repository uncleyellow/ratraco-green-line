import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface News {
  id: string;
  imageUrl: string;
  title: string;
  shortContent: string;
  fullContent: string;
  createdAt: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
  partners = [
    { name: 'TOYOTA', image: 'https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png' },
    { name: 'HYUNDAI', image: 'https://hyundaiankhanh.vn/wp-content/uploads/2022/09/y-nghia-logo-hyundai.jpg' },
    { name: 'LEXUS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdnpaHwz28vdlLf-L14FxrDRyhad-dLKHeQ&s' },
    { name: 'MITSUBISHI', image: 'https://banner2.cleanpng.com/20180802/tis/93ab2819be4d519df77ba9e99d998e02.webp' },
    { name: 'HONDA', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg' },
    { name: 'KIA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jE-rSCC1tz9wmA7vH9GnAxhSvRwAt_tS3A&s' },
    { name: 'PORSCHE', image: 'https://banner2.cleanpng.com/20180616/tfg/aa6hgdjs5.webp' },
    { name: 'SHARP', image: 'https://banner2.cleanpng.com/20180527/pli/avqya0slo.webp' },
    { name: 'ISUZU', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVcoU-SAXSbSi9jmBo3KJw7O2Ew2-6EpO_w&s' },
    { name: 'YAMAHA', image: 'https://banner2.cleanpng.com/20180426/xqw/aveyo53j8.webp' },
    { name: 'MITSUBA', image: 'https://media.licdn.com/dms/image/v2/C4E0BAQHKVGccRZS2Jw/company-logo_200_200/company-logo_200_200/0/1631324389777?e=2147483647&v=beta&t=1GFW6LOHayN_z3VwRaY3Z_PuXLIbS_4Qa5irGtGVK3U' }
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


  expandedNewsIndex: number | null = null;
  newsList: News[] = [];
  currentIndex = 0;
  itemsPerPage = 6;
constructor(
  private http: HttpClient
){

}
ngOnInit() {
  this.getNews();
}

getNews() {
  this.http.get<News[]>('http://localhost:3000/api/news').subscribe(
    (data) => {
      // Chỉnh sửa imageUrl để hiển thị ảnh hợp lệ nếu dữ liệu không phải URL
      this.newsList = data.map(news => ({
        ...news,
        imageUrl: this.isValidUrl(news.imageUrl) ? news.imageUrl : 'https://via.placeholder.com/300'
      }));
    },
    (error) => {
      console.error('Lỗi khi lấy dữ liệu tin tức:', error);
    }
  );
}


isValidUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}
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

  startIndex = 0;

  next() {
    if (this.startIndex + this.itemsPerPage < this.partners.length) {
      this.startIndex += this.itemsPerPage;
    }
  }

  prev() {
    if (this.startIndex > 0) {
      this.startIndex -= this.itemsPerPage;
    }
  }
}
