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
                "https://file.notion.so/f/f/38ecacd6-6662-4a8d-9245-40111a0a5cfb/6f0a057e-526d-4dee-a753-e2f837ba888c/do1.pdf?table=block&id=1e576887-e01a-805e-86e9-c0afbd5b2125&spaceId=38ecacd6-6662-4a8d-9245-40111a0a5cfb&expirationTimestamp=1746093600000&signature=E0Hc9blq2JK5mnFrggjlesJVLJZyhfXtfImmzvpzd9M&downloadName=Verbs_doc.pdf"
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
