interface SpriteClip {
	/**
	 * The image object to work on.
	 * @default undefined
	 */
	Adornee?: ImageButton | ImageLabel;
	/**
	 * The AssetId of the sprite sheet. Check `InheritSpriteSheet`.
	 * @default undefined
	 */
	SpriteSheet?: string;
	/**
	 * Whether the `SpriteSheet` value will automatically take the `Image` value of a GUI object when the `Adornee` is set.
	 * @default true
	 */
	InheritSpriteSheet: boolean;
	/**
	 * @default 1
	 */
	CurrentFrame: number;
	/**
	 * Size of individual sprites in pixels
	 * @default Vector2(100,100)
	 */
	SpriteSizePixel: Vector2;
	/**
	 * Offset between sprites
	 * @default Vector2(0,0)
	 */
	SpriteOffsetPixel: Vector2;
	/**
	 * Offset from sprite sheet's edge
	 * @default Vector2(0,0)
	 */
	EdgeOffsetPixel: Vector2;
	/**
	 * Global sprite count
	 * @default 25
	 */
	SpriteCount: number;
	/**
	 * Horizontal sprite count
	 * @default 5
	 */
	SpriteCountX: number;
	/**
	 * Framerate that gets turned into `FrameTime`, needs to be a divisor of 60
	 * @default 15
	 */
	FrameRate: number;
	/**
	 * How many frames to skip-1
	 * @default 4
	 */
	FrameTime: number;
	/**
	 * If the `CurrentFrame` will reset after each cycle
	 * @default true
	 */
	Looped: boolean;
	/**
	 * Whether the animation is playing
	 * @default false
	 */
	State: boolean;

	/**
	 * Sets the `State` property to true
	 * @returns success
	 */
	Play(): boolean;
	/**
	 * Sets the `State` property to false
	 * @returns success
	 */
	Pause(): boolean;
	/**
	 * Pauses the animation and resets the `CurrentFrame`
	 * @returns success
	 */
	Stop(): boolean;
	/**
	 * Increments the animation by the given number of frames or a single frame
	 * @param {number} [count=1] Number of frames to advance the animation by. Defaults to 1.
	 */
	Advance(count?: number): void;
	/**
	 * Removes the animation from the list and clears its metatable.
	 */
	Destroy(): void;
	/**
	 * Creates a new `SpriteClip` with the same properties as the original. Doesn't copy Adornee.
	 */
	Clone(): SpriteClip;
}

interface SpriteClipConstructor {
	new(): SpriteClip;
}

declare const SpriteClip: SpriteClipConstructor;
export = SpriteClip;