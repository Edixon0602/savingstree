export function ModelViewer({treeSrc}) {
	return (
		<>
			<model-viewer src={treeSrc} ar shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
		</>
	)
}