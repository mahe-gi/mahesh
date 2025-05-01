import Link from "next/link";

export default function Notes() {
  return (
    <div className="flex items-center">
      <div>
        <h1 className=" font-medium text-2xl">
          ➡️{" "}
          <span className=" text-green-600">
            {" "}
            <Link
              href={
                "https://massive-dodo-f8e.notion.site/MANOJ-SIR-CLASS-1e576887e01a80bbb228f33850ae2b74"
              }
            >
              {" "}
              CLICK HERE TO DOWNLOAD VERB-FORMS-PDF !
            </Link>
          </span>
        </h1>
      </div>
    </div>
  );
}
