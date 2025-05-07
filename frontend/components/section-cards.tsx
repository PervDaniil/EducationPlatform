import { Badge } from "@/components/ui/badge"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <div className="@container/card bg-muted/10 rounded-md py-4 px-6  border">
        <div>
          <div className="flex flex-row justify-between pt-1 pb-2 px-2">
            <p className="text-sm text-muted-foreground">06.05.25</p>
            <Badge variant="outline">
              Undone
            </Badge>
          </div>
          <h3 className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Prepositions</h3>
          <div className="mt-2">
          </div>
        </div>
        <div className="mt-5 flex-col items-start gap-1.5 text-sm ">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1
          </div>
          <div className="text-muted-foreground">class at 17:00</div>
        </div>
      </div>

      <div className="@container/card bg-muted/10 rounded-md py-4 px-6 border">
        <div>
        <div className="flex flex-row justify-between pt-1 pb-2 px-2">
            <p className="text-sm text-muted-foreground">06.05.25</p>
            <Badge variant="outline">
              Undone
            </Badge>
          </div>
          <h3 className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Past Simple</h3>
        </div>
        <div className="mt-5 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1-A2
          </div>
          <div className="text-muted-foreground">class at 12:00</div>
        </div>
      </div>

      <div className="@container/card bg-muted/10 rounded-md py-4 px-6  border">
        <div>
        <div className="flex flex-row justify-between pt-1 pb-2 px-2">
            <p className="text-sm text-muted-foreground">06.05.25</p>
            <Badge variant="outline">
              Undone
            </Badge>
          </div>
          <h3 className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Verb To be</h3>
        </div>
        <div className="mt-5 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1-A2 
          </div>
          <div className="text-muted-foreground">class at 12:00</div>
        </div>
      </div>

      <div className="@container/card bg-muted/10 rounded-md py-4 px-6 border">
        <div>
        <div className="flex flex-row justify-between pt-1 pb-2 px-2">
            <p className="text-sm text-muted-foreground">06.05.25</p>
            <Badge variant="outline">
              Undone
            </Badge>
          </div>
          <h3 className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Passive Voice</h3>
        </div>
        <div className="mt-5 flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A2-B1 
          </div>
          <div className="text-muted-foreground">class at 14:00</div>
        </div>
      </div>
    </div>
  )
}
