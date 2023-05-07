import { c as create_ssr_component, b as subscribe, f as add_attribute, e as escape, d as each } from "../../../../../../../chunks/index2.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let indexChapterActive = 0;
  const listImgSource = [
    "https://cdn4.lhmanga.com/Store/Manga/2a143e7c-b32e-4cfa-a01d-1589dda351fa_625c0d4d5db19.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/03_633449226a124.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/04_6334492273c32.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/05_6334492286027.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/06_6334492299400.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/07_63344922a6677.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/08_63344922af0c3.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/09_63344922cc0e7.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/10_63344922ddb23.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/11_633449230c7cf.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/12_63344923237a4.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/13_63344923349d8.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/14_633449233db16.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/15_6334492360a1e.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/16_63344923725aa.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/17_6334492386572.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/18_633449239a327.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/19_63344923a6a65.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/20_63344923b8d51.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/21_63344923dd92a.jpg",
    "https://cdn4.lhmanga.com/Store/Manga/22_633449241b6b8.jpg",
    "https://cdn1.lhmanga.com/Store/Manga/donate_6155db4eb4303.jpg"
  ];
  const listChapter = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4: Kẻ làm phiền",
    "Chapter 5: Người đàn ông có vấn đề",
    "Chapter 6: Chạy trốn",
    "Chapter 7",
    "Chapter 8: Chuyện đêm hôm đó",
    "Chapter 9: Vào đêm giông bão",
    "Chapter 10: Giáo viên trung học",
    "Chapter 11: Sau đêm giông",
    "Chapter 12: Người lớn trong thành phố ấy",
    "Chapter 13: Chạng vạng",
    "Chapter 14: Hoa bỉ ngạn",
    "Chapter 15: Mai phục",
    "Chapter 16: Màn đêm",
    "Chapter 17: Ngôi mộ bên đồi",
    "Chapter 18: Đợi chờ trong đêm trăng non",
    "Chapter 19: Kẻ gạ tình",
    "Chapter 20: Lời thú nhận",
    "Chapter 21: Một tương lai hạnh phúc",
    "Chapter 22: Ánh sáng",
    "Chapter 23: Sự thù ghét",
    "Chapter 24: Đêm tĩnh lặng",
    "Chapter 25: Tình tiết mới",
    "Chapter 26: Tình tử uyên",
    "Chapter 27: Nỗi buồn dơ bẩn",
    "Chapter 28: Màn độc diễn của kẻ ngoài cuộc",
    "Chapter 29: Ảo vọng của cái chết",
    "Chapter 30: Thoả thuận",
    "Chapter 31: Những năm tháng trôi qua",
    "Chapter 32: Quyết định",
    "Chapter 33: Hai rào cản",
    "Chapter 34: Trở lại",
    "Chapter 35: Đêm với mẹ",
    "Chapter 36: Buổi hẹn hò",
    "Chapter 37: Người dẫn lối",
    "Chapter 38: Bàn tay cứu rỗi",
    "Chapter 39: Sợi dây cứu rỗi",
    "Chapter 40: Ngọn lửa rực sáng",
    "Chapter 41: Thi thể trôi sông",
    "Chapter 42: Bọt nước",
    "Chapter 43: Tội phạm",
    "Chapter 44: Tiền",
    "Chapter 45: Đức mẹ từ thành phố ấy",
    "Chapter 46: Cuộc gặp gỡ bí mật",
    "Chapter 47: Từ nơi kết thúc",
    "Chapter 48: Chàng trai mới chuyển đến thị trấn",
    "Chapter 49: Chờ tới mùa xuân",
    "Chapter 50: Tình đầu",
    "Chapter 51: Nữ anh hùng nơi địa ngục",
    "Chapter 52: Sự rạn nứt",
    "Chapter 53: Thủ đoạn",
    "Chapter 54: Trò hề",
    "Chapter 55: Bao bọc",
    "Chapter 56: Ràng buộc",
    "Chapter 57: Cái chết",
    "Chapter 58: Điểm tựa",
    "Chapter 59: Tội lỗi của cậu ấy",
    "Chapter 60: Trống rỗng",
    "Chapter 61: Chiến thắng vô nghĩa",
    "Chapter 62: Bị nuốt chửng bởi thị trấn này",
    "Chapter 63: Chạng vạng",
    "Chapter 64: Lời nguyền của chàng thiếu niên",
    "Chapter 65: Ánh trăng",
    "Chapter 66: Nắm tay",
    "Chapter 67: Tôi vì cậu",
    "Chapter 68: Lời thú tội của kẻ canh mộ",
    "Chapter 69: Chén thánh của tội ác",
    "Chapter 70: Thị trấn băng giá",
    "Chapter 71: Người đàn bà mỉm cười",
    "Chapter 72: Có ổn không",
    "Chapter 73: Thất bại của chúng ta",
    "Chapter 74: Lòng tốt",
    "Chapter 75: Thay đổi",
    "Chapter 76: Chìa khóa",
    "Chapter 77: Sự ngột ngạt từ chính anh trai",
    "Chapter 78: Bạn thơ ấu",
    "Chapter 79: Kể từ ngày ấy",
    "Chapter 79.5: Ngoại truyện",
    "Chapter 80: Căn phòng của những câu trả lời",
    "Chapter 81: Người phụ nữ của thị trấn này",
    "Chapter 82: Tĩnh lặng",
    "Chapter 83: Thị trấn nhuốm màu hoen ố",
    "Chapter 84: Đẹp đẽ, mong manh, tối tăm và lạnh lẽo",
    "Chapter 85: Tạm biệt người lớn",
    "Chapter 86: Những thiếu niên từ thị trấn ấy",
    "Chapter 86.5: Ngoại truyện",
    "Chapter 87: Giấc mơ và thực tại",
    "Chapter 88: Người quen cũ",
    "Chapter 89: Vực thẳm của mẹ và con",
    "Chapter 90: Chuyện xưa dưới màn đêm",
    "Chapter 91: Ngày trước cơn bão",
    "Chapter 92: Lễ hội",
    "Chapter 93: Kết thúc",
    "Chapter 94: Cô gái với nụ cười yêu kiều",
    "Chapter 95: Lễ hội của những điềm báo",
    "Chapter 96: Tình đầu tan vỡ",
    "Chapter 97: Đêm giáng sinh",
    "Chapter 98: Ánh lửa",
    "Chapter 99: Không thể ngừng viết",
    "Chapter 100: Thăng hoa",
    "Chapter 101: Nóng vội… và cơn mưa",
    "Chapter 102: Giọt nước tràn ly",
    "Chapter 103: Quả báo",
    "Chapter 104: Dòng nước đục",
    "Chapter 105: Ác quỷ",
    "Chapter 106: Tạm biệt thị trấn ấy",
    "Chapter 107",
    "Chapter 108: Bể cá của sự luân hồi",
    "Chapter 109",
    "Chapter 110",
    "Chapter 111: Phía đối lập",
    "Chapter 112: Mảnh vá",
    "Chapter 113: Biển khơi"
  ];
  $$unsubscribe_page();
  return `<div class="fixed z-10 top-4 left-4"><button class="p-2.5 inline-flex items-center bg-neutral-800 hover:bg-neutral-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button></div>

<div class="${[
    "fixed inset-0 w-3/12 bg-neutral-900 transition-[margin] duration-500 z-20",
    ""
  ].join(" ").trim()}"><div class="flex flex-col p-3 h-full">
    <div class="flex justify-between items-center"><a${add_attribute("href", `/manga/details/${$page.params.urlManga}`, 0)}><button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg></button></a>

      <h1 class="text-lg line-clamp-2">Chainsaw Man</h1>

      <button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></button></div>

    
    <div class="flex justify-between items-center py-2 px-1"><div class="relative group cursor-pointer"><button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full disabled:opacity-20" ${"disabled"}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></button>
        <div class="hidden group-hover:flex absolute -top-12 w-56 justify-start items-center text-sm"><span class="rounded-lg bg-neutral-800 p-2">Chương trước</span>
          <span class="ml-1 rounded-lg border bg-neutral-900 py-1.5 px-3">,</span></div></div>

      <h2 class="line-clamp-1">${escape(listChapter[indexChapterActive])}</h2>

      <div class="relative group cursor-pointer"><button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full disabled:opacity-20" ${indexChapterActive >= listChapter.length - 1 ? "disabled" : ""}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button>
        <div class="hidden group-hover:flex absolute -top-12 w-56 left-1/2 -translate-x-1/2 justify-center items-center text-sm"><span class="rounded-lg bg-neutral-800 p-2">Chương sau</span>
          <span class="ml-1 rounded-lg border bg-neutral-900 py-1.5 px-3">.</span></div></div></div>

    
    <div class="flex justify-center items-center gap-x-3 px-1"><div class="relative group cursor-pointer"><button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full">${`<svg stroke="currentColor" stroke-width="0" viewBox="0 0 24 24" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M17 1V3L7 3V1L17 1Z"></path><path d="M16.2427 8.44772L14.8285 9.86194L13 8.03347L13 15.9665L14.8285 14.138L16.2427 15.5522L12 19.7949L7.75742 15.5522L9.17163 14.138L11 15.9664L11 8.03357L9.17163 9.86194L7.75742 8.44772L12 4.20508L16.2427 8.44772Z"></path><path d="M17 23V21H7V23H17Z"></path></svg>`}</button>
        <div class="hidden group-hover:flex absolute -top-12 left-1/2 -translate-x-1/2 w-56 justify-center items-center text-sm"><span class="rounded-lg bg-neutral-800 p-2">Chế độ ảnh</span>
          <span class="ml-1 rounded-lg border bg-neutral-900 py-1.5 px-2">N</span></div></div>

      <div class="relative group cursor-pointer"><button class="p-2.5 inline-flex items-center hover:bg-neutral-700 rounded-full">${`<svg stroke="currentColor" stroke-width="0" viewBox="0 0 24 24" class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z"></path></svg>`}</button>
        <div class="hidden group-hover:flex absolute -top-12 left-1/2 -translate-x-1/2 w-56 justify-center items-center text-sm"><span class="rounded-lg bg-neutral-800 p-2">Hướng đọc</span>
          <span class="ml-1 rounded-lg border bg-neutral-900 py-1.5 px-2">M</span></div></div></div>

    <div class="flex justify-between items-center py-2 relative text-white"><span class="absolute inset-y-0 left-0 flex items-center pl-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-6 h-6"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg></span>
      <input type="text" name="search" class="w-full bg-neutral-800 py-2 px-3 rounded-lg text-white pl-10 focus:outline-none" placeholder="Nhập chapter muốn tìm" autocomplete="off"></div>

    <ul class="w-full h-full bg-black overflow-auto scrollbar-w-1 scrollbar-thin scrollbar-thumb-neutral-500">${each(listChapter, (chapter, indexChapter) => {
    return `
        <li class="${[
      "px-4 py-3 cursor-pointer hover:bg-neutral-800",
      (indexChapterActive === indexChapter ? "border-rose-500" : "") + " " + (indexChapterActive === indexChapter ? "border-l-4" : "")
    ].join(" ").trim()}"${add_attribute("data-index", indexChapter, 0)}>${escape(chapter)}
        </li>`;
  })}</ul></div></div>

<div class="${[
    "w-9/12 transition-transition-[margin] duration-500",
    " ml-[25%] "
  ].join(" ").trim()}">${`
    <div class="flex flex-col gap-y-2">${each(listImgSource, (imgSrc, imgIndex) => {
    return `<img${add_attribute("src", imgSrc, 0)} alt="" class="${[
      "shrink-0",
      " h-screen mx-auto "
    ].join(" ").trim()}"${add_attribute("data-index", imgIndex, 0)}>`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
