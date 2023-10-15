import { Card } from "@/components/common";

export default function Home() {
  return (
    <div className="">
      <section>
        <h2>Pick up</h2>
        <div className="grid grid-cols-3 gap-x-4">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
      <section>
        <h2>articles</h2>
        <div className="grid grid-cols-3 gap-x-4">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
    </div>
  );
}
