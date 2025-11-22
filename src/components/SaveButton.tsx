interface Props {
  isSaving: boolean;
  saved: boolean;
  onSave: () => void;
}

export function SaveButton({ isSaving, saved, onSave }: Props) {
  return (
    <button
      onClick={onSave}
      disabled={isSaving}
      className="w-full mt-8 py-3 bg-black text-white rounded-xl shadow-soft
                 hover:bg-hi-blue transition disabled:opacity-50 font-semibold text-sm"
    >
      {isSaving && "Saving..."}
      {!isSaving && !saved && "Save Contribution Rate"}
      {!isSaving && saved && "✓ Saved!"}
    </button>
  );
}
