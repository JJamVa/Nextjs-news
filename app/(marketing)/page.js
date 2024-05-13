import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="신문" />
      <h1>다음 세대를 위한 뉴스 사이트</h1>
      <p>Next News는 최신 뉴스를 간결하고 공정하게 전달합니다!</p>

      <p>
        NextNews는 최신 뉴스를 간결하고 공정한 방식으로 제공하고자 합니다.
        우리는 뉴스를 이해하기 쉽고 요점을 정확히 전달하는 방식으로 제공하려고
        노력합니다. 필요 이상의 정보에 압도당하지 않도록 하면서 여러분이 정보를
        잘 파악할 수 있도록 돕고자 합니다.
      </p>

      <p>
        우리는 뉴스를 공정하고 객관적으로 전달하기 위해 헌신하는 저널리스트 팀을
        고용하고 있습니다. 우리 팀은 최신 뉴스를 전달하며 여러분을 계속해서
        정보에 밝히고자 열정을 가지고 있습니다.
      </p>

      <p>
        <Link href="/news">최신 뉴스 읽기</Link>
      </p>
    </div>
  );
}
