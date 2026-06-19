export async function GET() {
  return Response.json({
    month: "2026-04",
    events: [
      {
        id: 1,
        title: "Good Friday",
        date: "2026-04-03",
        type: "mandatory",
      },
      {
        id: 2,
        title: "Vaisakhi",
        date: "2026-04-13",
        type: "optional",
      },
      {
        id: 3,
        title: "Eid-al-Fitr",
        date: "2026-04-22",
        type: "mandatory",
      },
    ],
  });
}