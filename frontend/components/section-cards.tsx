import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>06.05.25</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Prepositions
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
                Undone
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1 <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            class at 17:00
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>07.05.25</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Past Simple
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              Undone
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1-A2 <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            class at 12:00
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>07.05.25</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Verb To be
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              Undone
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A1-A2 <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            class at 12:00
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>07.05.25</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Passive Voice
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              Undone
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            English A2-B1 <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            class at 14:00
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
