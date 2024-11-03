export default function DateFilter() {
  return (
    <div class="flex flex-col justify-center">
      <label htmlFor="qbDate" className="font-medium">Date</label>
      <input type="date" id="qbDate" name="qbDate" className="dateSelector" />
    </div>
  );
}
