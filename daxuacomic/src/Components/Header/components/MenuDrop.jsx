import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
const MenuDrop = () => {
  return (
    <div className="dropdown_item">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="title_Tl">
              <span data-title="Tất cả thể loại truyện tranh">
                <strong>Tất cả</strong>
              </span>
            </div>
            <div>
              <span
                title="Action"
                data-title="Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh"
              >
                Action
              </span>
            </div>
            <div>
              <span
                title="Adult"
                data-title="Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+"
              >
                Adult
              </span>
            </div>
            <div>
              <span
                title="Adventure"
                data-title="Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật"
              >
                Adventure
              </span>
            </div>
            <div>
              <span
                title="Anime"
                data-title="Truyện đã được chuyển thể thành film Anime"
              >
                Anime
              </span>
            </div>
            <div>
              <span
                title="Chuyển Sinh"
                data-title="Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác"
              >
                Chuyển Sinh
              </span>
            </div>
            <div>
              <span
                title="Comedy"
                data-title="Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng"
              >
                Comedy
              </span>
            </div>
            <div>
              <span title="Comic" data-title="Truyện tranh Châu Âu và Châu Mĩ">
                Comic
              </span>
            </div>
            <div className="title_Tl">
              <span
                title="Cổ Đại"
                data-title="Truyện có nội dung xảy ra ở thời cổ đại phong kiến."
              >
                <strong>Cổ Đại</strong>
              </span>
            </div>
            <div>
              <span
                title="Cooking"
                data-title="Thể loại có nội dung về nấu ăn, ẩm thực"
              >
                Cooking
              </span>
            </div>
            <div>
              <span
                title="Doujinshi"
                data-title="Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình"
              >
                Doujinshi
              </span>
            </div>
            <div>
              <span
                title="Drama"
                data-title="Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn"
              >
                Drama
              </span>
            </div>
            <div className="title_Tl">
              <span
                title="Đam Mỹ"
                data-title="Truyện tình cảm giữa nam và nam."
              >
                <strong>Đam Mỹ</strong>
              </span>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <span
                title="Ecchi"
                data-title="Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem"
              >
                Ecchi
              </span>
            </div>
            <div>
              <span
                title="Fantasy"
                data-title="Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên"
              >
                Fantasy
              </span>
            </div>
            <div>
              <span
                title="Gender Bender"
                data-title="Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam..."
              >
                Gender Bender
              </span>
            </div>
            <div>
              <span
                title="Harem"
                data-title="Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính"
              >
                Harem
              </span>
            </div>
            <div>
              <span
                title="Historical"
                data-title="Thể loại có liên quan đến thời xa xưa"
              >
                Historical
              </span>
            </div>
            <div>
              <span
                title="Horror"
                data-title="Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim"
              >
                Horror
              </span>
            </div>
            <div>
              <span
                title="Josei"
                data-title="Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn"
              >
                Josei
              </span>
            </div>
            <div>
              <span
                title="Live action"
                data-title="Truyện đã được chuyển thể thành phim"
              >
                Live action
              </span>
            </div>
            <div>
              <span title="Manga" data-title="Truyện tranh của Nhật Bản">
                Manga
              </span>
            </div>
            <div className="title_Tl">
              <span title="Manhua" data-title="Truyện tranh của Trung Quốc">
                <strong>Manhua</strong>
              </span>
            </div>
            <div>
              <span
                title="Manhwa"
                data-title="Truyện tranh Hàn Quốc, đọc từ trái sang phải"
              >
                Manhwa
              </span>
            </div>
            <div>
              <span
                title="Martial Arts"
                data-title="Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh"
              >
                Martial Arts
              </span>
            </div>
            <div>
              <span
                title="Mature"
                data-title="Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa"
              >
                Mature
              </span>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <span
                title="Mecha"
                data-title="Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)"
              >
                Mecha
              </span>
            </div>
            <div>
              <span
                title="Mystery"
                data-title="Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng"
              >
                Mystery
              </span>
            </div>
            <div className="title_Tl">
              <span
                title="Ngôn Tình"
                data-title="Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính."
              >
                <strong>Ngôn Tình</strong>
              </span>
            </div>
            <div>
              <span
                title="One shot"
                data-title="Những truyện ngắn, thường là 1 chapter"
              >
                One shot
              </span>
            </div>
            <div>
              <span
                title="Psychological"
                data-title="Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)"
              >
                Psychological
              </span>
            </div>
            <div className="title_Tl">
              <span
                title="Romance"
                data-title="Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu"
              >
                <strong>Romance</strong>
              </span>
            </div>
            <div>
              <span
                title="School Life"
                data-title="Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học"
              >
                School Life
              </span>
            </div>
            <div>
              <span
                title="Sci-fi"
                data-title="Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra"
              >
                Sci-fi
              </span>
            </div>
            <div>
              <span
                title="Seinen"
                data-title="Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm"
              >
                Seinen
              </span>
            </div>
            <div>
              <span
                title="Shoujo"
                data-title="Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)"
              >
                Shoujo
              </span>
            </div>
            <div>
              <span
                title="Shoujo Ai"
                data-title="Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime"
              >
                Shoujo Ai
              </span>
            </div>
            <div>
              <span
                title="Shounen"
                data-title="Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)"
              >
                Shounen
              </span>
            </div>
            <div>
              <span
                title="Shounen Ai"
                data-title="Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục"
              >
                Shounen Ai
              </span>
            </div>
          </Col>
          <Col lg={3}>
            <div>
              <span
                title="Slice of Life"
                data-title="Nói về cuộc sống đời thường"
              >
                Slice of Life
              </span>
            </div>
            <div>
              <span
                title="Smut"
                data-title="Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục"
              >
                Smut
              </span>
            </div>
            <div>
              <span
                title="Soft Yaoi"
                data-title="Boy x Boy. Nặng hơn Shounen Ai tí."
              >
                Soft Yaoi
              </span>
            </div>
            <div>
              <span
                title="Soft Yuri"
                data-title="Girl x Girl. Nặng hơn Shoujo Ai tí"
              >
                Soft Yuri
              </span>
            </div>
            <div>
              <span
                title="Sports"
                data-title="Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này"
              >
                Sports
              </span>
            </div>
            <div>
              <span
                title="Supernatural"
                data-title="Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý"
              >
                Supernatural
              </span>
            </div>
            <div>
              <span
                title="Thiếu Nhi"
                data-title="Truyện tranh dành cho lứa tuổi thiếu nhi"
              >
                Thiếu Nhi
              </span>
            </div>
            <div>
              <span
                title="Tragedy"
                data-title="Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn"
              >
                Tragedy
              </span>
            </div>
            <div>
              <span
                title="Trinh Thám"
                data-title="Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra..."
              >
                Trinh Thám
              </span>
            </div>
            <div>
              <span
                title="Truyện scan"
                data-title="Các truyện đã phát hành tại VN được scan đăng online"
              >
                Truyện scan
              </span>
            </div>
            <div>
              <span
                title="Truyện Màu"
                data-title="Tổng hợp truyện tranh màu, rõ, đẹp"
              >
                Truyện Màu
              </span>
            </div>
            <div>
              <span
                title="Webtoon"
                data-title="Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường"
              >
                Webtoon
              </span>
            </div>
            <div className="title_Tl">
              <span
                title="Xuyên Không"
                data-title="Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác."
              >
                <strong>Xuyên Không</strong>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(MenuDrop);
