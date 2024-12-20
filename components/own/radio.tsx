import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useId } from "react"

export function RadioGroupDemo({ title, onValueChange }: { title: string, onValueChange: (value: string) => void }) {

    const r1 = useId()
    const r2 = useId()
    const r3 = useId()
    const r4 = useId()

    return (
        <div className="p-2 border-b">
            <h1 className="mb-2">{title}</h1>
            <RadioGroup className="pl-4" onValueChange={onValueChange}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id={r1} />
                    <Label htmlFor={r1}>完全没有</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id={r2} />
                    <Label htmlFor={r2}>有几天</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id={r3} />
                    <Label htmlFor={r3}>超过一半</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id={r4} />
                    <Label htmlFor={r4}>几乎每天</Label>
                </div>
            </RadioGroup>

        </div>
    )
}
