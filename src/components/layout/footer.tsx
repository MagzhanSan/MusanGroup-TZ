import { Logo } from "@/assets/logo";
import { Text } from "../features/text";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-dark-gray-bg py-5">
      <div className="container flex flex-col gap-3.5 px-1">
        <div>
          <Logo
            fill="var(--color-white)"
            className="h-[clamp(31px,calc(31px+17*(100vw-320px)/680),48px)] w-[clamp(117px,calc(117px+67*(100vw-320px)/680),184px)]"
          />
        </div>
        <Text type="footer-text" classNames="text-light-green">
          Центр деловой информации Kapital.kz — информационное агентство,
          информирующее о событиях в экономике, бизнесе и финансах в Казахстане
          и за рубежом. При работе с материалами Центра деловой информации
          Kapital.kz разрешено использование лишь 30% текста с обязательной
          гиперссылкой на источник. При использовании полного материала
          необходимо разрешение редакции. Редакция Kapital.kz не всегда
          разделяет мнения авторов статей. При нарушении условий размещения
          материалов редакция делового портала имеет право на решение спорных
          моментов в законодательном порядке
        </Text>
      </div>
    </footer>
  );
};

export { Footer };
