const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Texto: 0},
	{ControlTáctil: 0},
	{Sólido: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Sprite4: 0},
	{Valor: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	ControlTáctil: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}