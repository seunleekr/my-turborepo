export function Modal( { children }: {children: React.ReactNode} ) {
  return (
    <div style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
    }}>
        <div style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            minWidth: 300,
        }}>
            {children}
        </div>
    </div>
  );
}