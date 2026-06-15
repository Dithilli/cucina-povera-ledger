export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      app_settings: {
        Row: {
          active_week: string
          calorie_target: number
          challenge_slug: string
          protein_floor: number
          updated_at: string
          user_id: string
          weekly_budget: number
        }
        Insert: {
          active_week: string
          calorie_target: number
          challenge_slug?: string
          protein_floor: number
          updated_at?: string
          user_id: string
          weekly_budget: number
        }
        Update: {
          active_week?: string
          calorie_target?: number
          challenge_slug?: string
          protein_floor?: number
          updated_at?: string
          user_id?: string
          weekly_budget?: number
        }
        Relationships: []
      }
      challenges: {
        Row: {
          created_at: string
          default_calorie_target: number
          default_protein_floor: number
          default_weekly_budget: number
          id: string
          name: string
          slug: string
          tagline: string | null
        }
        Insert: {
          created_at?: string
          default_calorie_target: number
          default_protein_floor: number
          default_weekly_budget: number
          id?: string
          name: string
          slug: string
          tagline?: string | null
        }
        Update: {
          created_at?: string
          default_calorie_target?: number
          default_protein_floor?: number
          default_weekly_budget?: number
          id?: string
          name?: string
          slug?: string
          tagline?: string | null
        }
        Relationships: []
      }
      content_docs: {
        Row: {
          body: string
          challenge_id: string
          created_at: string
          id: string
          kind: string
          slug: string
          title: string
        }
        Insert: {
          body: string
          challenge_id: string
          created_at?: string
          id?: string
          kind: string
          slug: string
          title: string
        }
        Update: {
          body?: string
          challenge_id?: string
          created_at?: string
          id?: string
          kind?: string
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_docs_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      entries: {
        Row: {
          calories: number
          challenge_slug: string
          cost: number
          created_at: string
          date: string
          dish: string
          id: string
          protein: number
          updated_at: string
          user_id: string
          week: string
          zero_waste: boolean
        }
        Insert: {
          calories: number
          challenge_slug?: string
          cost: number
          created_at?: string
          date: string
          dish?: string
          id: string
          protein: number
          updated_at?: string
          user_id: string
          week: string
          zero_waste: boolean
        }
        Update: {
          calories?: number
          challenge_slug?: string
          cost?: number
          created_at?: string
          date?: string
          dish?: string
          id?: string
          protein?: number
          updated_at?: string
          user_id?: string
          week?: string
          zero_waste?: boolean
        }
        Relationships: []
      }
      recipes: {
        Row: {
          blurb: string
          challenge_id: string
          created_at: string
          cuisine: string
          est_cost_per_serving: number | null
          id: string
          ingredients: Json
          macros_verified: boolean
          method: string[]
          modern_move: string | null
          notes: string | null
          per_serving_calories: number
          per_serving_protein: number
          roles: string[]
          servings: number
          slug: string
          tags: string[]
          title: string
          zero_waste_hero: boolean
        }
        Insert: {
          blurb: string
          challenge_id: string
          created_at?: string
          cuisine: string
          est_cost_per_serving?: number | null
          id?: string
          ingredients?: Json
          macros_verified?: boolean
          method?: string[]
          modern_move?: string | null
          notes?: string | null
          per_serving_calories: number
          per_serving_protein: number
          roles?: string[]
          servings: number
          slug: string
          tags?: string[]
          title: string
          zero_waste_hero?: boolean
        }
        Update: {
          blurb?: string
          challenge_id?: string
          created_at?: string
          cuisine?: string
          est_cost_per_serving?: number | null
          id?: string
          ingredients?: Json
          macros_verified?: boolean
          method?: string[]
          modern_move?: string | null
          notes?: string | null
          per_serving_calories?: number
          per_serving_protein?: number
          roles?: string[]
          servings?: number
          slug?: string
          tags?: string[]
          title?: string
          zero_waste_hero?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "recipes_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      week_themes: {
        Row: {
          bonus: boolean
          challenge_id: string
          context: string | null
          created_at: string
          cuisine: string
          days: Json | null
          description: string
          dishes: string[]
          engine: string[] | null
          first_shop_total: number | null
          id: string
          number: number
          precious_thread: string
          protein_note: string | null
          shopping: Json | null
          slug: string
          steady_state_weekly: number | null
          theme: string
          title: string
        }
        Insert: {
          bonus?: boolean
          challenge_id: string
          context?: string | null
          created_at?: string
          cuisine: string
          days?: Json | null
          description: string
          dishes?: string[]
          engine?: string[] | null
          first_shop_total?: number | null
          id?: string
          number: number
          precious_thread: string
          protein_note?: string | null
          shopping?: Json | null
          slug: string
          steady_state_weekly?: number | null
          theme: string
          title: string
        }
        Update: {
          bonus?: boolean
          challenge_id?: string
          context?: string | null
          created_at?: string
          cuisine?: string
          days?: Json | null
          description?: string
          dishes?: string[]
          engine?: string[] | null
          first_shop_total?: number | null
          id?: string
          number?: number
          precious_thread?: string
          protein_note?: string | null
          shopping?: Json | null
          slug?: string
          steady_state_weekly?: number | null
          theme?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "week_themes_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
