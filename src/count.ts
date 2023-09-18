export async function count() {
  let count = Number(await Bun.file("/tmp/count").text()) as number;
  const res = count + 1;
  Bun.write("/tmp/count", String(res));
  return count;
}
