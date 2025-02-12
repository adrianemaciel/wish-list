export interface Wish {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  isTaken: boolean;
}

export const mockWishes: Wish[] = [
  {
    id: 1,
    title: "A hora da estrela: Edição comemorativa",
    link: "https://www.amazon.com.br/hora-estrela-Edi%C3%A7%C3%A3o-comemorativa/dp/6555320354",
    imageUrl: "https://m.media-amazon.com/images/I/61TaHURu27L._SL1000_.jpg",
    isTaken: false,
  },
  {
    id: 2,
    title: "Echo Dot (5ª Geração)",
    link: "https://www.amazon.com.br/Echo-Dot-5%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B09B8VGCR8/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K5UXF8H26FQ&dib=eyJ2IjoiMSJ9.ImuzGe466lFMI6gkWv-Qu17wL6Nz_adka-evTPiMRFiF_TPFIVogXG9bqrrjkVvatZGwzfjqQGdXgGxG4i0DnzNH2y7esqaxOr0XzqDWf_tANRmwsUKm6HtFK2soRvIdjFdTfWigB7HW8SUd4BWa9xsQ6rhOqf2VgNo_bG01JnxphDSGNSfEoq0UnXywe3ujUOruaPymCEoaqIX6SbPeVLUEHZPSJ6lm5F8ZiptxyGg.M61lWj6neMSJnrJli4_XurQ_CI8ydm4KQKMaBDnZ0lA&dib_tag=se&keywords=Echo+Dot+%285%C2%AA+Gera%C3%A7%C3%A3o%29&qid=1739390388&s=books&sprefix=echo+dot+5%C2%AA+gera%C3%A7%C3%A3o+%2Cstripbooks%2C187&sr=1-1&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
    imageUrl: "https://m.media-amazon.com/images/I/617-HLllfZL._AC_SX679_.jpg",
    isTaken: false,
  },
  {
    id: 3,
    title: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    link: "https://www.amazon.com.br/Echo-Dot-5%C2%AA-gera%C3%A7%C3%A3o-Cor-Preta/dp/B09B8VGCR8/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K5UXF8H26FQ&dib=eyJ2IjoiMSJ9.ImuzGe466lFMI6gkWv-Qu17wL6Nz_adka-evTPiMRFiF_TPFIVogXG9bqrrjkVvatZGwzfjqQGdXgGxG4i0DnzNH2y7esqaxOr0XzqDWf_tANRmwsUKm6HtFK2soRvIdjFdTfWigB7HW8SUd4BWa9xsQ6rhOqf2VgNo_bG01JnxphDSGNSfEoq0UnXywe3ujUOruaPymCEoaqIX6SbPeVLUEHZPSJ6lm5F8ZiptxyGg.M61lWj6neMSJnrJli4_XurQ_CI8ydm4KQKMaBDnZ0lA&dib_tag=se&keywords=Echo+Dot+%285%C2%AA+Gera%C3%A7%C3%A3o%29&qid=1739390388&s=books&sprefix=echo+dot+5%C2%AA+gera%C3%A7%C3%A3o+%2Cstripbooks%2C187&sr=1-1&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751",
    imageUrl: "https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SL1500_.jpg",
    isTaken: false,
  },
  {
    id: 4,
    title: "Mouse Logitech MX Master 3S",
    link: "https://www.amazon.com.br/Logitech-MX-Master-3S-Superf%C3%ADcie/dp/B0B11LJ69K/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=P4Q8CRF94TK0&dib=eyJ2IjoiMSJ9.-gpkxJ6Ru5SjwutlKCtM2ryHGT9RhnmLT786_jeZssXutmPbV6DKjbEQgItqHxpCtmsijO2w-EKQBrSjzXmnAR8NUS1Td18fwCnGszkv7JfWQLX8BBVt_M1-OxaXA7cG5d5OnwmUKOkYVpmITi5xSROCXaS2F3dKdgrMC0y_JWPjnI9fxCNAtTCqwmgQyq6zXq-X_9lTSxQxj4flC90VyAPDbN7bU8HNd_ayMPodCJ8.7bLPDKcA8MLACPsmKGHVTlLSxrYl9Uo12Es1bYAK--Q&dib_tag=se&keywords=mouse+logitech+mx+master+3&qid=1739390842&s=books&sprefix=mouse+logitech+mx+master+3s%2Cstripbooks%2C446&sr=1-1&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
    imageUrl: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    isTaken: false,
  },
  {
    id: 5,
    title: "Kindle Paperwhite 11ª geração",
    link: "https://www.amazon.com.br/Capa-Novo-Kindle-Paperwhite-gera%C3%A7%C3%A3o/dp/B09H8MW7X8/ref=sr_1_5_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1MAEQIMNBVOJ7&dib=eyJ2IjoiMSJ9.nPrlZP0pdtf40w4AYkb0TidMpAjjmOgJkESZQfAw7izGjHj071QN20LucGBJIEps.poy2fjDapn4KEFWY9AoFGWLT-kpAtP8fErTfts7B7Ok&dib_tag=se&keywords=Kindle+Paperwhite+11%C2%AA+gera%C3%A7%C3%A3o&qid=1739390931&s=books&sprefix=kindle+paperwhite+11%C2%AA+gera%C3%A7%C3%A3o%2Cstripbooks%2C369&sr=1-5-spons&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
    imageUrl: "https://m.media-amazon.com/images/I/71HTg-iZy6L._AC_SL1200_.jpg",
    isTaken: false,
  },
];
