const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Texto: 0},
	{ControlTáctil: 0},
	{Valor: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	ControlTáctil: class extends self.IInstance {}
}